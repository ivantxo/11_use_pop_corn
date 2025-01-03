import NavBar from "./NavBar";
import Main from "./Main";
import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import MovieList from "./MovieList";
import Box from "./Box";
import WatchedSummary from "./WatchedSummary";
import WacthedMoviesList from "./WacthedMoviesList";
import MovieDetails from "./MovieDetails";
import Loader from "./Loader";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const KEY = "e861a96c";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);

  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "matched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
              apiKey={KEY}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WacthedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}
