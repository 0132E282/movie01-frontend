import movieRepository from "@/repositories/MovieRepository";

/**
 * ApiService acts as a central point for all data fetching needs,
 * abstracting away the repository implementation.
 */
export const ApiService = {
  movies: movieRepository,
  
  // You can add more repositories here as the project grows
  // users: userRepository,
  // comments: commentRepository,
};

export default ApiService;
