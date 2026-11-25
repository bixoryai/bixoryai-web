/**
 * After `vite build`, render every sitemap URL in a real browser and write
 * dist/<route>.html.
 *
 * GitHub Pages serves /route from route.html with HTTP 200 and no redirect.
 * A directory index (route/index.html) is answered with a 301 to /route/,
 * which is the status Facebook and LinkedIn were missing. The homepage
 * stays dist/index.html.
 *
 * The saved document already contains the route title, description,
 * canonical, and og:* tags, plus one H1 inside #root. The client bundle
 * still boots with createRoot().render(), which replaces #root instead of
 * appending a second copy.
 */
import { spawn } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const dist = join(root, "dist");
const port = 4188;
const origin = `http://127.0.0.1:${port}`;

const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const paths = [...sitemap.matchAll(/<loc>https:\/\/bixory\.ai([^<]*)<\/loc>/g)].map((match) => {
  const path = match[1] || "/";
  return path === "" ? "/" : path;
});

if (paths.length !== 32) {
  throw new Error(`Expected 32 sitemap URLs, found ${paths.length}`);
}

function outputFile(path) {
  if (path === "/") return join(dist, "index.html");
  return join(dist, `${path.slice(1)}.html`);
}

async function waitForServer() {
  const deadline = Date.now() + 20000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin + "/");
      if (response.ok) return;
    } catch {
      // preview is still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("vite preview did not start");
}

const preview = spawn(
  join(root, "node_modules", ".bin", "vite"),
  ["preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort"],
  { cwd: root, stdio: "inherit" },
);

let browser;
try {
  await waitForServer();
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath();
  browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const started = Date.now();
  for (const path of paths) {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(String(error)));
    await page.goto(origin + path, { waitUntil: "domcontentloaded", timeout: 45000 });
    try {
      await page.waitForFunction(
        (routePath) => {
          const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
          const expected = routePath === "/" ? "https://bixory.ai/" : `https://bixory.ai${routePath}`;
          const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
          return canonical === expected && ogTitle.length > 0 && document.title === ogTitle && document.querySelectorAll("h1").length === 1;
        },
        { timeout: 20000 },
        path,
      );
    } catch (error) {
      const debug = await page.evaluate(() => ({
        title: document.title,
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
        ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute("content") || "",
        h1: [...document.querySelectorAll("h1")].map((el) => el.textContent.replace(/\s+/g, " ").trim()),
        text: (document.body.innerText || "").replace(/\s+/g, " ").trim().slice(0, 240),
      }));
      throw new Error(`${path} did not settle (${pageErrors.join(" | ") || error.message})\n${JSON.stringify(debug)}`);
    }

    if (pageErrors.length) {
      throw new Error(`${path} threw during prerender: ${pageErrors.join(" | ")}`);
    }

    let html = await page.content();
    html = html.replaceAll(origin, "");
    if (html.includes(origin) || html.includes(`127.0.0.1:${port}`)) {
      throw new Error(`${path} prerender still points at the preview server`);
    }

    const h1s = [...html.matchAll(/<h1\b/gi)];
    if (h1s.length !== 1) {
      throw new Error(`${path} static HTML has ${h1s.length} h1 tags`);
    }

    const file = outputFile(path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
    console.log(`prerendered ${path} -> ${file.replace(dist, "dist")} | ${title}`);
    await page.close();
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`Prerendered ${paths.length} routes in ${seconds}s`);
} finally {
  if (browser) await browser.close();
  preview.kill("SIGTERM");
}
