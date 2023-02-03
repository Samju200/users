import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders fetch users', async () => {
    const { getByTestId } = render(<App />);
    const usersContainer = getByTestId('users-container');
    expect(usersContainer).toBeInTheDocument();
  });

  it('renders input search', async () => {
    const { getByTestId } = render(<App />);
    const inputSearch = getByTestId('input-search');
    expect(inputSearch).toBeInTheDocument();
  });

  it('change input value', async () => {
    const { getByTestId } = render(<App />);
    const inputSearch = getByTestId('input-search');
    fireEvent.change(inputSearch, { target: { value: 'search' } });
    expect(inputSearch.value).toBe('search');
  });

  it('renders pagination', async () => {
    const { getByTestId } = render(<App />);
    const paginationContainer = getByTestId('pagination-container');
    expect(paginationContainer).toBeInTheDocument();
  });

  it('click next page', async () => {
    const { getByTestId } = render(<App />);
    const nextPageButton = getByTestId('next-page');
    fireEvent.click(nextPageButton);
  });

  it('click prev page', async () => {
    const { getByTestId } = render(<App />);
    const prevPageButton = getByTestId('prev-page');
    fireEvent.click(prevPageButton);
  });

  it('change gender button', async () => {
    const { getByTestId } = render(<App />);
    const genderButton = getByTestId('gender-button');
    fireEvent.click(genderButton);
  });

  it('download csv file', async () => {
    const { getByTestId } = render(<App />);
    const downloadCsv = getByTestId('download-csv');
    fireEvent.click(downloadCsv);
  });
});
