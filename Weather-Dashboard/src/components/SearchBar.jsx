/* eslint-disable react/prop-types */

/**
* SearchBar component
*
* @param {object} props
* @param {function} props.onSearch - Function to call when search is triggered
* @param {function} props.onChange - Function to call when input value changes
* @param {string} props.value - Current input value
*/
import React from 'react';
function SearchBar({ onSearch, onChange, value }) {
 return (
   <div className="search">
     {/* Input field for searching city names */}
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