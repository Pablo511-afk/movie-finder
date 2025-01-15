import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies } = useMovies();

  return (
    <div>
      <header>
        <form>
          <h1>Movie finder</h1>
          <input placeholder="Hulk, Iron Man..."></input>
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
