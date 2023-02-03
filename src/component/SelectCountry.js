import React from 'react';
import './selectCountry.css';

const SelectCountry = ({ countries, setCategory, category }) => {
  console.log(category);
  return (
    <select
      name="country"
      id=""
      placeholder="Country"
      className="selectCountry"
      onChange={(e) => setCategory(e.target.value)}
    >
      {countries.map((country) => {
        return (
          <option value={country} placeholder="Country">
            {country}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCountry;
