import React from 'react';

const SelectCountry = ({ countries, setCategory }) => {
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
