import { TextField, Button, Container } from '@material-ui/core';

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

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = () => {
    if (!fullName || !email || (!password && password)) {
      ///had to change the if statement and put the checks all in the same line
      setFormData({
        ...formData,
        fullNameError: fullName ? '' : 'FullName is required',
        emailError: email ? '' : 'email is required',
        passwordError: password ? '' : 'Please eneter a password',
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
    alert('account created successfully');
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
          style={{ width: 300 }}
        />
        <TextField
          error={confirmPasswordError ? true : false}
          helperText={confirmPasswordError}
          label="Confirm Password"
          margin="normal"
          variant="outlined"
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
