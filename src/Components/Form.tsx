import React, { useState } from 'react';
import AccountDetailsStep from './AccountDetailsStep';
import { Button, Box } from '@material-ui/core';

import PersosnalInfoStep from './PersonalInfoStep';

interface FormData {
  password: string;
  confirmPassword: string;
  address: string;
  gender: string;
  fullName: string;
  email: string;
  genderError: string;
  emailError: string;
  passwordError: string;
  addressError: string;
  fullNameError: string;
  confirmPasswordError: string;
}

export const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ['Persosnal Info', 'Account Details'];

  const [formData, setFormData] = useState<FormData>({
    address: '',
    gender: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    email: '',
    genderError: '',
    addressError: '',
    fullNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return (
          <PersosnalInfoStep formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <AccountDetailsStep formData={formData} setFormData={setFormData} />
        );

      default:
        return <div />;
    }
  };

  const handleNextClick = () => {
    const { address, gender } = formData;

    if (!address || !gender) {
      ///hand to change the if statement and put the checks all in the same line
      setFormData({
        ...formData,
        addressError: address ? '' : 'Address is required',
        genderError: gender ? '' : 'Gender is required',
      });
      return false;
    }

    setPage((currPage) => currPage + 1);
  };

  const handlePreviousClick = () => {
    setPage((currPage) => currPage - 1);
  };

  return (
    <Box className="form">
      <Box className="form-container">
        <Box className="header">
          <h1>{formTitles[page]}</h1>
        </Box>
        <Box className="body">{conditionalComponent()}</Box>
        <Box className="footer">
          <Button
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
            size="small"
            disabled={page === 0}
            onClick={handlePreviousClick}
          >
            Previous
          </Button>
          <Button
            style={{ margin: 10 }}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            disabled={page === formTitles.length - 1}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
