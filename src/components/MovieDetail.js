import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function MovieDetail({ movie, onClose }) {
  const { theme } = useContext(ThemeContext);

  if (!movie) {
    return (
      <div className={`card shadow-sm text-center p-4 ${theme === 'dark' ? 'bg-dark text-white border-secondary' : 'bg-light text-muted'}`}>
        <div className="py-4">
          <h5 className="fw-bold mb-2">Movie Details</h5>
          <p className="small mb-0">Chọn một bộ phim và nhấn <strong>Chi tiết</strong> để xem thông tin.</p>
        </div>
      </div>
    );
  }

  const cardBg = theme === 'dark' ? 'bg-dark text-white border-secondary' : 'bg-white text-dark border-light-subtle';

  return (
    <div className={`card shadow-sm movie-detail-card ${cardBg}`}>
      <div className="card-header d-flex justify-content-between align-items-center py-3">
        <h4 className="card-title h5 mb-0 fw-bold">
          Movie Details
        </h4>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary"
          onClick={onClose}
          aria-label="Close"
          title="Đóng chi tiết"
        >
          ✕
        </button>
      </div>

      <div className="card-body">
        <div className="mb-3">
          <p className="mb-2"><strong>Title:</strong> {movie.title}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.genre}</p>
          <p className="mb-2"><strong>Year:</strong> {movie.year}</p>
          <p className="mb-2"><strong>Rating:</strong> {movie.rating}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.director}</p>
          <p className="mb-2"><strong>Duration:</strong> {movie.duration}</p>
        </div>

        <hr className={theme === 'dark' ? 'border-secondary' : ''} />

        <div className="movie-description mb-3">
          <strong className="d-block mb-1">Description:</strong>
          <p className="text-break mb-0" style={{ lineHeight: '1.6' }}>
            {movie.description}
          </p>
        </div>

        <div className="d-grid mt-4">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
