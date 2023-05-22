import {
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import React from 'react';

function AccountDetailsStep({ formData, setFormData }: any) {
  const {
    fullName,
    password,
    confirmPassword,
    email,
    fullNameError,
    passwordError,
    confirmPasswordError,
    emailError,
  } = formData;

  const [visible, setVisible] = useState(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const EndAdornment = ({ visible, setVisible }: any) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  console.log('set visible', visible);

  const handleCreateAccount = () => {
    if (!fullName || !email || !password) {
      setFormData({
        ...formData,
        fullNameError: fullName ? '' : 'FullName is required',
        emailError: !email
          ? 'Email is required'
          : !isEmailValid(email)
          ? 'Invalid email address'
          : '',
        passwordError: password ? '' : 'Please enter a password',
      });
      return false;
    }

    if (!isEmailValid(email)) {
      setFormData({
        ...formData,
        emailError: 'Invalid email address',
      });
      return false;
    }

    if (password !== confirmPassword) {
      setFormData({
        ...formData,
        confirmPasswordError: 'Passwords do not match',
      });
      return false;
    }

    alert('Account created successfully');
  };

  return (
    <Container
      style={{
        paddingTop: 150,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          error={fullNameError ? true : false}
          helperText={fullNameError}
          label="Fullname"
          margin="normal"
          variant="outlined"
          value={fullName}
          onChange={(e) => {
            if (fullName) {
              setFormData({
                ...formData,
                fullName: e.target.value,
                fullNameError: '',
              });
            } else {
              setFormData({ ...formData, fullName: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
        <TextField
          error={emailError ? true : false} // checks if error string exists
          helperText={emailError} //if it does, helper text will be printed out
          label="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => {
            if (email) {
              setFormData({
                ...formData,
                email: e.target.value,
                emailError: '',
              });
            } else {
              setFormData({ ...formData, email: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />

        <TextField
          error={passwordError ? true : false}
          helperText={passwordError}
          label="Password"
          margin="normal"
          variant="outlined"
          type={visible ? 'password' : 'text'}
          value={password}
          onChange={(e) => {
            if (password) {
              setFormData({
                ...formData,
                password: e.target.value, ///removes the error once the user enters a value
                passwordError: '',
              });
            } else {
              setFormData({ ...formData, password: e.target.value });
            }
          }}
          InputProps={{
            endAdornment: (
              <EndAdornment visible={visible} setVisible={setVisible} />
            ),
          }}
          style={{ width: 300 }}
        />
        <TextField
          error={confirmPasswordError ? true : false}
          helperText={confirmPasswordError}
          label="Confirm Password"
          margin="normal"
          variant="outlined"
          type={visible ? 'password' : 'text'}
          value={confirmPassword}
          onChange={(e) => {
            if (confirmPassword) {
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
                confirmPasswordError: '',
              });
            } else {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
        <Button
          style={{ marginTop: 10 }}
          variant="contained"
          color="primary"
          onClick={handleCreateAccount}
        >
          Create Account
        </Button>
      </form>
    </Container>
  );
}

export default AccountDetailsStep;
