import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import {
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
} from './FormHandlers';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container
      style={{
        paddingTop: 150,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          value={username}
          onChange={(e) => {
            handleUsernameChange(e, setUsername);
          }}
          style={{ width: 300 }}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => handlePasswordChange(e, setPassword)}
          style={{ width: 300 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <Button style={{ marginTop: 10 }} variant="contained" color="primary">
        Create Account
      </Button>
    </Container>
  );
}

export default Login;
