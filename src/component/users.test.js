import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Users from './Users';

describe('Users component', () => {
  it('renders user details correctly', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(
      <Users
        title="Mr."
        firstName="John"
        lastName="Doe"
        streetNum="123"
        streetName="Main St."
        city="Los Angeles"
        country="USA"
        state="CA"
        email="john.doe@example.com"
        phone="555-555-5555"
        image="https://example.com/john.jpg"
        handleClick={mockHandleClick}
        showCategory={false}
      />
    );

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('123 Main St., CA USA')).toBeInTheDocument();
    expect(getByText('john.doe@example.com')).toBeInTheDocument();
    expect(getByText('555-555-5555')).toBeInTheDocument();
  });

  it('calls handleClick when clicked', () => {
    const mockHandleClick = jest.fn();
    const { getByTestId } = render(
      <Users
        title="Mr."
        firstName="John"
        lastName="Doe"
        streetNum="123"
        streetName="Main St."
        city="Los Angeles"
        country="USA"
        state="CA"
        email="john.doe@example.com"
        phone="555-555-5555"
        image="https://example.com/john.jpg"
        handleClick={mockHandleClick}
        showCategory={false}
      />
    );

    fireEvent.click(getByTestId('user-profile'));
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
