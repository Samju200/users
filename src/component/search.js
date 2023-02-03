import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.css';
const Search = ({ handleInputSearch, inputValue }) => {
  console.log(inputValue);
  return (
    <div>
      <form>
        <div className="form-control">
          <FaSearch className="form-control__searchIcon" />
          <input
            type="text"
            placeholder="Find a user"
            value={inputValue}
            onChange={handleInputSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
