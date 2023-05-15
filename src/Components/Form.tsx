import React, { useState } from 'react';
import SecondStep from './SecondStep';
import { Button } from '@material-ui/core';

import FirstStep from './FirstStep';

interface FormData {
  password: string;
  confirmPassword: string;
  address: string;
  gender: string;
  fullName: string;
  userName: string;
  genderError: string;
  userNameError: string;
  passwordError: string;
  addressError: string;
  fullNameError: string;
  confirmPasswordError: string;
}

export const Form = () => {
  const [page, setPage] = useState(0);
  const formTitles = ['First Step', 'Second Step'];

  const [formData, setFormData] = useState<FormData>({
    address: '',
    gender: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    userName: '',
    genderError: '',
    addressError: '',
    fullNameError: '',
    userNameError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <FirstStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondStep formData={formData} setFormData={setFormData} />;

      default:
        return <div />;
    }
  };

  const handleNextClick = () => {
    if (!formData.address || !formData.address.length) {
      setFormData({
        ...formData,
        addressError: 'Address is required',
      });
      return false;
    }
    if (!formData.gender || !formData.gender.length) {
      setFormData({ ...formData, genderError: 'Gender is required' });
      return false;
    }

    setPage((currPage) => currPage + 1);
  };

  const handlePreviousClick = () => {
    setPage((currPage) => currPage - 1);
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[page]}</h1>
        </div>
        <div className="body">{conditionalComponent()}</div>
        <div className="footer">
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
        </div>
      </div>
    </div>
  );
};
