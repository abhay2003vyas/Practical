import React from "react";
import './Search.css';

const Search = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
  );
};

export default Search;
