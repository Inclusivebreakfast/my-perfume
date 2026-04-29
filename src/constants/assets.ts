/**
 * Centralized asset mapping for the application.
 * Using imports ensures Vite handles hashing and optimization correctly.
 */

export const ASSETS = {
  IMAGES: {
    HOME_HERO: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=2653&auto=format&fit=crop',
    PHILOSOPHY: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=2653&auto=format&fit=crop'
  }
} as const;
