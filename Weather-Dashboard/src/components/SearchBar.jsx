/* eslint-disable react/prop-types */
import React from 'react';
function SearchBar({ onSearch, onChange, value }) {
  return (
    <div className="search">
      <input
        type="text"
        className="SearchBar sm:h-200px"
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