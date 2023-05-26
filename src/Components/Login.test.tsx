import React, { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the Login Page', () => {
  it('should render the login form', () => {
    render(<Login onFormSubmit={() => {}} />);

    const usernameInput = screen.getByTestId('username-textfield');
    const passwordInput = screen.getByTestId('password-textfield');
    const submitButton = screen.getByTestId('submit-button');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should validate the form and call onFormSubmit with correct data', () => {
    const mockOnFormSubmit = jest.fn();

    render(<Login onFormSubmit={mockOnFormSubmit} />);

    const usernameInput = screen.getByTestId('username-textfield');
    const passwordInput = screen.getByTestId('password-textfield');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    // Checking if onFormSubmit is called with correct data

    ///get this to work by just expecting the username and password
    expect(mockOnFormSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
  });

  it('should display validation errors for empty fields', () => {
    const { getByTestId, getByText } = render(
      <Login onFormSubmit={() => {}} />
    );

    const usernameInput = screen.getByTestId('username-textfield');
    const passwordInput = screen.getByTestId('password-textfield');
    const submitButton = getByTestId('submit-button');

    fireEvent.click(submitButton);

    // Checking if validation errors are displayed
    expect(getByText('Username is required')).toBeInTheDocument();
    expect(getByText('Password is required')).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.click(submitButton);

    // Checkxking if only password validation error is displayed
    expect(getByText('Password is required')).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    // Checking if only username validation error is displayed
    expect(getByText('Username is required')).toBeInTheDocument();
  });
});
