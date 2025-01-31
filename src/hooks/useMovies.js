import { useCallback, useMemo, useRef, useState } from 'react';

export function useMovies({ sort }) {
  const [mappedMovies, setMappedMovies] = useState([]);
  const previousRef = useRef();

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousRef.current) return;

    if (search) {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=4287ad07&s=${search}`);
        const jsonResponse = await response.json();
        const movies = jsonResponse.Search;

        previousRef.current = search;
        setMappedMovies(
          movies?.map((movie) => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            poster: movie.Poster,
          })),
        );
      } catch {
        throw new Error('Something happend');
      }
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort ? [...mappedMovies].sort((a, b) => a.title.localeCompare(b.title)) : mappedMovies;
  }, [sort, mappedMovies]);

  return { movies: sortedMovies, getMovies };
}
