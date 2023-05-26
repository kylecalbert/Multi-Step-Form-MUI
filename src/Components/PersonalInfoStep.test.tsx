import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PersonalInfoStep from './PersonalInfoStep';
import { Form } from './Form';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the data changes', () => {
  it('should update address and gender fields to what the user input ', () => {
    const setFormData = jest.fn();
    const formData = {
      addressError: '',
      genderError: '',
      address: '',
      gender: '',
    };
    render(<PersonalInfoStep formData={formData} setFormData={setFormData} />);

    const addressInput = screen.getByTestId('address-textfield');
    const genderInput = screen.getByTestId('gender-textfield');

    fireEvent.change(addressInput, { target: { value: '63 berry lane' } });
    fireEvent.change(genderInput, { target: { value: 'male' } });

    expect(setFormData).toHaveBeenCalledTimes(2);

    expect(setFormData).toHaveBeenCalledWith({
      ...formData,
      address: '63 berry lane',
    });
    expect(setFormData).toHaveBeenCalledWith({
      ...formData,
      gender: 'male',
    });
  });
});

describe('Testing for errors', () => {
  let nextButton: HTMLElement;

  beforeEach(() => {
    render(<Form />);
    nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);
  });

  it('Should display error messages if both input fields are empty', () => {
    const addressError = screen.getByText('Address is required');
    const genderError = screen.getByText('Gender is required');
    expect(addressError).toBeInTheDocument();
    expect(genderError).toBeInTheDocument();
  });

  it('Should display error message if addresss field is empty', () => {
    const addressError = screen.getByText('Address is required');
    const genderInput = screen.getByTestId('gender-textfield');
    fireEvent.change(genderInput, { target: { value: 'male' } });
    fireEvent.click(nextButton);
    expect(addressError).toBeInTheDocument();
  });

  it('Should display error messages if gender field is empty', () => {
    const genderError = screen.getByText('Gender is required');
    const addressInput = screen.getByTestId('address-textfield');
    fireEvent.change(addressInput, { target: { value: '63 BERRY LANE' } });
    fireEvent.click(nextButton);
    expect(genderError).toBeInTheDocument();
  });

  it('The error message filed should clear if the user enters a value', () => {
    const addressInput = screen.getByTestId('address-textfield');
    const genderInput = screen.getByTestId('gender-textfield');
    const addressError = screen.getByText('Address is required');
    const genderError = screen.getByText('Gender is required');
    fireEvent.click(nextButton);
    fireEvent.change(addressInput, { target: { value: '63 berry lane' } });
    fireEvent.change(genderInput, { target: { value: 'male' } });
    expect(genderError).not.toBeInTheDocument();
    expect(addressError).not.toBeInTheDocument();
  });
});
