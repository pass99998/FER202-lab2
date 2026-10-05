import React, { useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

function SearchBar({ searchTerm, onSearchChange }) {
  const inputRef = useRef(null);

  // Automatic focus on the search input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClear = () => {
    onSearchChange('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search-bar mb-3">
      <label htmlFor="movie-search-input" className="form-label fw-semibold">
        Tìm kiếm phim / Search Movie:
      </label>
      <div className="input-group">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          id="movie-search-input"
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Tìm tên phim..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleClear}
            title="Xóa tìm kiếm"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
