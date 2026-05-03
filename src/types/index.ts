export interface Movie {
  id: number;
  slug: string;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  duration: string;
  quality: string;
  views: string;
  country: string;
  language: string;
  director: string;
  cast: string[];
  thumb: string;
  backdrop: string;
  desc: string;
  featured: boolean;
  tags: string[];
  episodes: number | null;
  trailer: boolean;
  episode_links?: Record<string, string>;
}
