import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import '@testing-library/jest-dom/extend-expect';

describe('testing the page changes when fields are filled', () => {
  let nextButton: HTMLElement;

  beforeEach(() => {
    render(<Form />);
    nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);
  });

  ///maybe i can test the state directly, see if the page value increments?

  it('should transition to the account details page', () => {
    const genderInput = screen.getByTestId('gender-textfield');
    const addressInput = screen.getByTestId('address-textfield');
    fireEvent.change(addressInput, { target: { value: '63 berry lane' } });
    fireEvent.change(genderInput, { target: { value: 'male' } });
    fireEvent.click(nextButton);
    expect(screen.getByText('Account Details')).toBeInTheDocument();
  });
});
