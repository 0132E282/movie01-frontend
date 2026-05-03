import { Movie } from "@/types";
import { MOVIES } from "@/data/movies";
import apiClient from "@/services/api-client";

export interface MovieQueryParams {
  page?: number;
  limit?: number;
  genre?: string;
  country?: string;
  year?: number;
  q?: string;
  type?: "single" | "series";
}

class MovieRepository {
  /**
   * Fetch all movies with optional filters
   * Currently uses local data, but structured for API integration
   */
  async getAll(params: MovieQueryParams = {}): Promise<{ data: Movie[]; total: number }> {
    let filtered = [...MOVIES];

    if (params.type) {
      filtered = filtered.filter(m => m.type === params.type);
    }
    if (params.genre) {
      filtered = filtered.filter(m => m.genre.includes(params.genre!));
    }
    if (params.country) {
      filtered = filtered.filter(m => m.country === params.country);
    }
    if (params.year) {
      filtered = filtered.filter(m => m.year === params.year);
    }
    if (params.q) {
      const query = params.q.toLowerCase();
      filtered = filtered.filter(m => 
        m.title.toLowerCase().includes(query) || 
        m.slug.toLowerCase().includes(query)
      );
    }

    const total = filtered.length;
    const limit = params.limit || 20;
    const page = params.page || 1;
    const start = (page - 1) * limit;
    
    return {
      data: filtered.slice(start, start + limit),
      total
    };
  }

  /**
   * Get a single movie by slug
   */
  async getBySlug(slug: string): Promise<Movie | null> {
    // In a real app: const { data } = await apiClient.get(`/movies/${slug}`);
    return MOVIES.find(m => m.slug === slug) || null;
  }

  /**
   * Get featured movies
   */
  async getFeatured(): Promise<Movie[]> {
    return MOVIES.filter(m => m.is_featured).sort((a, b) => (a.position_featured || 0) - (b.position_featured || 0));
  }

  /**
   * Get movies for slider
   */
  async getSliderMovies(): Promise<Movie[]> {
    return MOVIES.filter(m => m.is_show_slider).sort((a, b) => (a.position_show_slider || 0) - (b.position_show_slider || 0));
  }

  /**
   * Get related movies
   */
  async getRelated(movie: Movie, limit = 12): Promise<Movie[]> {
    return MOVIES
      .filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g)))
      .slice(0, limit);
  }
}

export const movieRepository = new MovieRepository();
export default movieRepository;
