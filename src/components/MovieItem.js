import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaStar, FaInfoCircle, FaHeart, FaRegHeart } from 'react-icons/fa';

function MovieItem({ movie, isFavorite, onToggleFavorite, onSelectMovie, isSelected }) {
  const { theme } = useContext(ThemeContext);

  const cardBg = theme === 'dark' 
    ? (isSelected ? 'bg-secondary bg-opacity-25 border-primary' : 'bg-dark text-white border-secondary') 
    : (isSelected ? 'bg-primary bg-opacity-10 border-primary' : 'bg-white text-dark border-light-subtle');

  return (
    <div className={`card mb-3 shadow-sm transition-all ${cardBg} ${isSelected ? 'border-2' : ''}`}>
      <div className="card-body">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
          {/* Movie summary: Title | Genre | Year | Rating */}
          <div className="flex-grow-1">
            <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
              {isFavorite && (
                <FaStar className="text-warning" title="Phim yêu thích" />
              )}
              <h5 className="card-title mb-0 fw-bold">{movie.title}</h5>
            </div>
            
            <div className="text-muted d-flex align-items-center gap-2 flex-wrap small">
              <span className="badge bg-info text-dark">{movie.genre}</span>
              <span>•</span>
              <span>Năm: <strong>{movie.year}</strong></span>
              <span>•</span>
              <span className="d-flex align-items-center gap-1 text-warning fw-bold">
                <FaStar /> {movie.rating}
              </span>
            </div>
          </div>

          {/* Action buttons: [Favorite] | [View Details] */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            <button
              onClick={() => onToggleFavorite(movie.id)}
              className={`btn btn-sm d-flex align-items-center gap-1 ${
                isFavorite ? 'btn-danger' : 'btn-outline-danger'
              }`}
              title={isFavorite ? 'Bỏ thích' : 'Yêu thích'}
            >
              {isFavorite ? (
                <>
                  <FaHeart /> Bỏ thích
                </>
              ) : (
                <>
                  <FaRegHeart /> Yêu thích
                </>
              )}
            </button>

            <button
              onClick={() => onSelectMovie(movie)}
              className={`btn btn-sm d-flex align-items-center gap-1 ${
                isSelected ? 'btn-primary' : 'btn-outline-primary'
              }`}
              title="Xem chi tiết"
            >
              <FaInfoCircle /> Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
