import React from 'react';
import MovieItem from './MovieItem';

function MovieList({
  movies,
  totalCount,
  favorites,
  onToggleFavorite,
  onSelectMovie,
  selectedMovieId
}) {
  const favoriteCount = favorites.length;
  const displayedCount = movies.length;

  return (
    <div className="movie-list">
      {/* Summary statistics bar as in wireframe: Tổng: X | Yêu thích: Y (Đang hiển thị: Z) */}
      <div className="stats-bar alert alert-secondary py-2 px-3 mb-3 d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <span className="fw-semibold">Tổng:</span> {totalCount ?? displayedCount}{' '}
          <span className="mx-2">|</span>
          <span className="fw-semibold text-danger">Yêu thích:</span> {favoriteCount}{' '}
          <span className="mx-2">|</span>
          <span className="fw-semibold text-primary">Đang hiển thị:</span> {displayedCount}
        </div>
      </div>

      {/* List of movies */}
      {displayedCount === 0 ? (
        <div className="text-center py-5 text-muted">
          <p className="fs-5 mb-0">Không tìm thấy bộ phim nào phù hợp.</p>
        </div>
      ) : (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            onToggleFavorite={onToggleFavorite}
            onSelectMovie={onSelectMovie}
            isSelected={selectedMovieId === movie.id}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;
