import { useCallback, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { handleError } from './services/handleError';
import debounce from 'just-debounce-it';

function App() {
  const [error, setError] = useState();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const { movies, getMovies } = useMovies({ sort });

  const debounceSearchValue = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500),
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = handleError(event.target);
    if (error) {
      setError(error);
      return;
    } else {
      setError();
    }

    getMovies({ search });
  };

  const handleSearch = (event) => {
    const currentValue = event.target.value;
    if (currentValue === ' ') {
      return;
    }
    setSearch(currentValue);
    debounceSearchValue(currentValue);
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <h1>Movie finder</h1>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
            name="name"
            value={search}
            placeholder="Hulk, Iron Man..."
            onChange={handleSearch}
          ></input>
          <input
            type="checkbox"
            checked={sort}
            onChange={() => {
              setSort(!sort);
            }}
          ></input>
          <button type="submit">Search</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </header>

      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
