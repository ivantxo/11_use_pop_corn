import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function Main({ movies, tempWatchedData }) {
  return (
    <main className="main">
      <ListBox movies={movies} />

      <WatchedBox tempWatchedData={tempWatchedData} />
    </main>
  );
}

export default Main;
