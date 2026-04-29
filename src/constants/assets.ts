/**
 * Centralized asset mapping for the application.
 * Using imports ensures Vite handles hashing and optimization correctly.
 */

export const ASSETS = {
  IMAGES: {
    HOME_HERO: 'https://images.unsplash.com/photo-1512231011577-51df338df381?q=80&w=2653&auto=format&fit=crop',
    PHILOSOPHY: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2653&auto=format&fit=crop'
  }
} as const;
