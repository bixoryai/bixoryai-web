-- Create AI tools table
CREATE TABLE public.ai_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  pricing TEXT,
  rating DECIMAL(2,1),
  website_url TEXT,
  logo_url TEXT,
  tags TEXT[],
  features TEXT[],
  is_featured BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
  source_url TEXT,
  crawled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_tools ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "AI tools are viewable by everyone" 
ON public.ai_tools 
FOR SELECT 
USING (status = 'active');

-- Create policies for authenticated users to manage tools
CREATE POLICY "Authenticated users can insert ai tools" 
ON public.ai_tools 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update ai tools" 
ON public.ai_tools 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ai_tools_updated_at
BEFORE UPDATE ON public.ai_tools
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_ai_tools_category ON public.ai_tools(category);
CREATE INDEX idx_ai_tools_status ON public.ai_tools(status);
CREATE INDEX idx_ai_tools_featured ON public.ai_tools(is_featured);
CREATE INDEX idx_ai_tools_tags ON public.ai_tools USING GIN(tags);