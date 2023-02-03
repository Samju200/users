import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('UserDetails component', () => {
  it('renders without crashing', () => {
    const mockUser = {
      name: {
        title: 'Mr',
        first: 'John',
        last: 'Doe',
      },
      location: {
        street: {
          number: 123,
          name: 'Main St',
        },
        city: 'New York',
        state: 'NY',
      },
      email: 'john.doe@example.com',
      phone: '555-555-5555',
      cell: '555-555-5556',
      dob: {
        age: 30,
      },
      registered: {
        date: '2022-01-01T00:00:00.000Z',
      },
      picture: {
        large: 'https://example.com/image.jpg',
      },
    };
    const handleClick = jest.fn();
    const { container } = render(
      <UserDetails user={mockUser} handleClick={handleClick} />
    );
    expect(container).toBeDefined();
  });
});
