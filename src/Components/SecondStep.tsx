import { TextField, Button, Container } from '@material-ui/core';

function SecondStep({ formData, setFormData }: any) {
  const handleCreateAccount = () => {
    if (!formData.fullName || !formData.fullName.length) {
      setFormData({
        ...formData,
        fullNameError: 'Fullname is required',
      });
      return false;
    }
    if (!formData.userName || !formData.userName.length) {
      setFormData({ ...formData, userNameError: 'Username is required' });
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setFormData({
        ...formData,
        confirmPasswordError: 'Passwords do not match',
      });
      return false;
    }
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
          error={formData.fullNameError ? true : false}
          helperText={formData.fullNameError}
          label="Fullname"
          margin="normal"
          variant="outlined"
          value={formData.fullName}
          onChange={(e) => {
            if (formData.fullName) {
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
          error={formData.userNameError ? true : false}
          helperText={formData.userNameError}
          label="Username"
          margin="normal"
          variant="outlined"
          value={formData.userName}
          onChange={(e) => {
            if (formData.userName) {
              setFormData({
                ...formData,
                userName: e.target.value,
                userNameError: '',
              });
            } else {
              setFormData({ ...formData, userName: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
        <TextField
          error={formData.passwordError ? true : false}
          helperText={formData.passwordError}
          label="Password"
          margin="normal"
          variant="outlined"
          value={formData.password}
          onChange={(e) => {
            if (formData.password) {
              setFormData({
                ...formData,
                password: e.target.value,
                passwordError: '',
              });
            } else {
              setFormData({ ...formData, password: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
        <TextField
          error={formData.confirmPasswordError ? true : false}
          helperText={formData.confirmPasswordError}
          label="Confirm Password"
          margin="normal"
          variant="outlined"
          value={formData.confirmPassword}
          onChange={(e) => {
            if (formData.confirmPassword) {
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

export default SecondStep;
