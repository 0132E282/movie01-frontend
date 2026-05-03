export const ROUTE_PATTERNS = {
  HOME: "/",
  SINGLE_MOVIES: "/single-movies",
  SERIES_MOVIES: "/series-movies",
  CATALOG: "/catalog",
  GENRE: "/genre",
  COUNTRY: "/country",
  YEAR: "/year",
  MOVIE_DETAIL: "/movie",
  WATCH: "/watch",
};

export const getMovieUrl = (slug: string) => ({
  pathname: `${ROUTE_PATTERNS.MOVIE_DETAIL}/[slug]` as any,
  params: { slug }
});

export const getWatchUrl = (slug: string, ep?: number) => {
  const watchSlug = ep ? `${slug}-tap-${ep}` : `${slug}-tap-1`;
  return {
    pathname: `${ROUTE_PATTERNS.WATCH}/[slug]` as any,
    params: { slug: watchSlug }
  };
};

export const getGenreUrl = (slug: string) => ({
  pathname: `${ROUTE_PATTERNS.GENRE}/[slug]` as any,
  params: { slug }
});

export const getCountryUrl = (slug: string) => ({
  pathname: `${ROUTE_PATTERNS.COUNTRY}/[slug]` as any,
  params: { slug }
});

export const getYearUrl = (slug: string) => ({
  pathname: `${ROUTE_PATTERNS.YEAR}/[slug]` as any,
  params: { slug }
});
