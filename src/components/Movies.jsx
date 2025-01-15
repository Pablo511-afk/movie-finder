function ListOfMovies({ movies = [] }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title}></img>
          </li>
        );
      })}
    </ul>
  );
}

function NoMovies() {
  return <p>No movies found</p>;
}

export function Movies({ movies = [] }) {
  const hasMovies = movies.length > 0;
  return hasMovies ? <ListOfMovies movies={movies}></ListOfMovies> : <NoMovies></NoMovies>;
}
