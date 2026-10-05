import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function MovieItem({ movie, isFavorite, onToggleFavorite, onSelectMovie }) {
  const { theme } = useContext(ThemeContext);

  const itemBg = theme === 'dark' 
    ? 'bg-dark text-white border-secondary' 
    : 'bg-white text-dark border-light-subtle';

  return (
    <div className={`list-group-item px-3 py-3 ${itemBg}`}>
      {/* Dòng 1: Tiêu đề bên trái, các thông tin bên phải */}
      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
        <h5 className="mb-0 fw-bold">{movie.title}</h5>

        <div className="text-muted d-flex align-items-center gap-3 flex-wrap small">
          <span>{movie.genre}</span>
          <span>{movie.year}</span>
          <span className="text-warning fw-bold">
            {movie.rating}
          </span>
        </div>
      </div>

      {/* Dòng 2: Nút bấm căn chỉnh lệch về phía bên phải dưới các thông tin */}
      <div className="d-flex justify-content-end align-items-center gap-2">
        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`btn btn-sm ${
            isFavorite ? 'btn-danger' : 'btn-outline-danger'
          }`}
          title={isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        >
          {isFavorite ? 'Bỏ thích' : 'Yêu thích'}
        </button>

        <button
          onClick={() => onSelectMovie(movie)}
          className="btn btn-sm btn-outline-primary"
          title="Xem chi tiết"
        >
          Chi tiết
        </button>
      </div>
    </div>
  );
}

export default MovieItem;
