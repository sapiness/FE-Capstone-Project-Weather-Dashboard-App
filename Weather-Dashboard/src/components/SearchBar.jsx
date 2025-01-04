/* eslint-disable react/prop-types */
import React from 'react';
function SearchBar({ onSearch, onChange, value }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="city-search sm:h-200px"
        placeholder="Enter City Name.."
        name="query"
        value={value}
        onChange={onChange}
        onKeyPress={onSearch}
      />
    </div>
  );
}
export default SearchBar;