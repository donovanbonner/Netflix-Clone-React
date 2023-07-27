const key = "1225bd284a4ebeed82f700080988a980";

const requests = {
  requestPopularMovies: `https://api.themoviedb.org/3/discover/movie?with_original_language=en&page=1&api_key=${key}`,
  requestPopularTV: `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&with_original_language=en&api_key=${key}`,
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/day?language=en&page=1&api_key=${key}`,
  requestTrendingTV: `https://api.themoviedb.org/3/trending/tv/day?language=en&page=1&api_key=${key}`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?language=en&region=US&page=1&api_key=${key}`,
  requestTrendingAll: `https://api.themoviedb.org/3/trending/all/day?language=en&api_key=${key}`,
};

export default requests;
