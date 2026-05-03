export interface EpisodeServer {
  title: string;
  url: string;
}

export interface Episode {
  title: string;
  server: EpisodeServer[];
}

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
  is_featured: boolean;
  is_show_slider: boolean;
  position_show_slider: number;
  position_featured: number;
  tags: string[];
  type: "single" | "series";
  episodes: Episode[];
  trailer: string | null;
}
