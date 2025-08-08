// Input validation and sanitization utilities

// Sanitize HTML to prevent XSS attacks
export const sanitizeHtml = (input: string): string => {
  // Basic HTML encoding to prevent XSS
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Validate and sanitize text input
export const validateText = (input: string, maxLength: number = 1000): string => {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input provided');
  }
  
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    throw new Error('Input cannot be empty');
  }
  
  if (trimmed.length > maxLength) {
    throw new Error(`Input too long. Maximum ${maxLength} characters allowed`);
  }
  
  return sanitizeHtml(trimmed);
};

// Validate URL format
export const validateUrl = (url: string): string => {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL provided');
  }
  
  const trimmed = url.trim();
  if (trimmed.length === 0) {
    return '';
  }
  
  try {
    new URL(trimmed);
    return sanitizeHtml(trimmed);
  } catch {
    throw new Error('Invalid URL format');
  }
};

// Validate email format
export const validateEmail = (email: string): string => {
  if (!email || typeof email !== 'string') {
    throw new Error('Invalid email provided');
  }
  
  const trimmed = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(trimmed)) {
    throw new Error('Invalid email format');
  }
  
  if (trimmed.length > 254) {
    throw new Error('Email too long');
  }
  
  return trimmed;
};

// Validate rating (0-5)
export const validateRating = (rating: number): number => {
  if (typeof rating !== 'number' || isNaN(rating)) {
    throw new Error('Invalid rating provided');
  }
  
  if (rating < 0 || rating > 5) {
    throw new Error('Rating must be between 0 and 5');
  }
  
  return Math.round(rating * 10) / 10; // Round to 1 decimal place
};

// Validate and sanitize array of strings (for tags, features)
export const validateStringArray = (arr: string[], maxLength: number = 10): string[] => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid array provided');
  }
  
  if (arr.length > maxLength) {
    throw new Error(`Too many items. Maximum ${maxLength} allowed`);
  }
  
  return arr.map(item => {
    if (typeof item !== 'string') {
      throw new Error('All array items must be strings');
    }
    return validateText(item, 50); // Max 50 chars per tag/feature
  });
};