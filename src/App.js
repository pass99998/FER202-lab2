import React, { useState, useMemo, useContext } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import moviesData from './datas/movies';
import './App.css';

function MainApp() {
  const { theme } = useContext(ThemeContext);

  // Search, Filter, Sort state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [sortBy, setSortBy] = useState('default');

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useLocalStorage('movie_favorites', [2, 3]);

  // Selected movie for details panel (default to first movie as depicted in wireframe)
  const [selectedMovie, setSelectedMovie] = useState(moviesData[0] || null);

  // Toggle favorite function
  const handleToggleFavorite = (movieId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movieId)) {
        return prevFavorites.filter((id) => id !== movieId);
      } else {
        return [...prevFavorites, movieId];
      }
    });
  };

  // Select movie for detail view
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  // Close movie detail view
  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  // Filter and sort movies dynamically
  const filteredAndSortedMovies = useMemo(() => {
    let result = [...moviesData];

    // 1. Search by title (case-insensitive)
    if (searchTerm.trim() !== '') {
      const lowerSearch = searchTerm.trim().toLowerCase();
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(lowerSearch)
      );
    }

    // 2. Filter by genre
    if (selectedGenre && selectedGenre !== 'All Genres') {
      result = result.filter(
        (movie) =>
          movie.genre === selectedGenre ||
          (movie.title === 'Your Name' && selectedGenre === 'Animation')
      );
    }

    // 3. Sort by rating
    if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'rating-asc') {
      result.sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [searchTerm, selectedGenre, sortBy]);

  return (
    <div className={`app-container ${theme} min-vh-100`}>
      {/* Header with Title and Theme Toggle */}
      <Header />

      <main className="container pb-5">
        {/* Search Bar with auto-focus */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Genre Filter & Sort by Rating */}
        <GenreFilter
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Main Content: Left Movie List, Right Movie Detail */}
        <div className="row g-4">
          <div className="col-lg-7">
            <MovieList
              movies={filteredAndSortedMovies}
              totalCount={moviesData.length}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectMovie={handleSelectMovie}
              selectedMovieId={selectedMovie ? selectedMovie.id : null}
            />
          </div>

          <div className="col-lg-5">
            <MovieDetail
              movie={selectedMovie}
              onClose={handleCloseDetail}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
