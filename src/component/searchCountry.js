import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchCountry.css';

const SearchCountry = ({ handleInputSearch, inputValue }) => {
  return (
    <div>
      <form>
        <div className="form-control-2">
          <FaSearch className="form-control-2__searchIcon" />
          <input
            type="text"
            placeholder="Find in list"
            value={inputValue}
            onChange={handleInputSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchCountry;
