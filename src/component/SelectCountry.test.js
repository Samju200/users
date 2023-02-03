import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectCountry from './SelectCountry';

describe('SelectCountry component', () => {
  it('renders all the countries correctly', () => {
    const countries = ['USA', 'India', 'UK', 'China'];
    const setCategory = jest.fn();
    const { getByPlaceholderText, getAllByRole } = render(
      <SelectCountry countries={countries} setCategory={setCategory} />
    );
    const selectCountry = getByPlaceholderText('Country');
    expect(selectCountry).toBeInTheDocument();

    const options = getAllByRole('option');
    expect(options.length).toBe(countries.length);

    countries.forEach((country, i) => {
      expect(options[i]).toHaveTextContent(country);
    });
  });

  it('calls setCategory with the correct value on change event', () => {
    const countries = ['USA', 'India', 'UK', 'China'];
    const setCategory = jest.fn();
    const { getByPlaceholderText } = render(
      <SelectCountry countries={countries} setCategory={setCategory} />
    );
    const selectCountry = getByPlaceholderText('Country');
    fireEvent.change(selectCountry, { target: { value: countries[2] } });
    expect(setCategory).toHaveBeenCalledWith(countries[2]);
  });
});
