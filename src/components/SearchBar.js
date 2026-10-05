import React, { useRef, useEffect } from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  const inputRef = useRef(null);

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
        <input
          id="movie-search-input"
          ref={inputRef}
          type="text"
          className="form-control shadow-none"
          style={{ boxShadow: 'none', borderColor: '#ced4da' }}
          placeholder="Tìm tên phim..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary shadow-none"
            type="button"
            onClick={handleClear}
            title="Xóa tìm kiếm"
            style={{ boxShadow: 'none' }}
          >
            Xóa
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
