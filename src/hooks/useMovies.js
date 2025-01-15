import responseMovies from '../../mocks/with-movies.json';
// import responseNoMovies from '../mocks/no-movies.json';

export function useMovies() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
