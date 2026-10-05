import React from 'react';

const GENRES = [
  'All Genres',
  'Action',
  'Animation',
  'Comedy',
  'Drama',
  'Romance',
  'Sci-Fi'
];

function GenreFilter({ selectedGenre, onGenreChange, sortBy, onSortChange }) {
  return (
    <div className="filter-sort-controls row g-3 mb-4">
      {/* Genre Filter */}
      <div className={sortBy !== undefined ? "col-md-6" : "col-12"}>
        <label htmlFor="genre-select" className="form-label fw-semibold">
          Thể loại / Genre:
        </label>
        <select
          id="genre-select"
          className="form-select shadow-none"
          style={{ boxShadow: 'none' }}
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
        >
          {GENRES.map((genre) => (
            <option key={genre} value={genre}>
              {genre === 'All Genres' ? 'Tất cả thể loại (All Genres)' : genre}
            </option>
          ))}
        </select>
      </div>

      {/* Sort by Rating (if props provided) */}
      {sortBy !== undefined && onSortChange && (
        <div className="col-md-6">
          <label htmlFor="sort-select" className="form-label fw-semibold">
            Sắp xếp / Sort by:
          </label>
          <select
            id="sort-select"
            className="form-select shadow-none"
            style={{ boxShadow: 'none' }}
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="default">Mặc định (Default)</option>
            <option value="rating-desc">Rating: High → Low</option>
            <option value="rating-asc">Rating: Low → High</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default GenreFilter;
