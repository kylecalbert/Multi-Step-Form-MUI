import { TextField, Container } from '@material-ui/core';
import { handleSubmit } from './FormHandlers';
import React from 'react';

function PersonalInfoStep({ formData, setFormData }: any) {
  const { addressError, genderError, address, gender } = formData;

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
          error={addressError ? true : false}
          helperText={addressError}
          label="Address"
          margin="normal"
          inputProps={{ 'data-testid': 'address-textfield' }}
          variant="outlined"
          value={address}
          onChange={(e) => {
            if (addressError) {
              setFormData({
                ...formData,
                address: e.target.value,
                addressError: '',
              });
            } else {
              setFormData({ ...formData, address: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
        <TextField
          label="Gender "
          error={genderError ? true : false}
          helperText={genderError}
          margin="normal"
          variant="outlined"
          inputProps={{ 'data-testid': 'gender-textfield' }}
          value={gender}
          onChange={(e) => {
            if (genderError) {
              setFormData({
                ...formData,
                gender: e.target.value,
                genderError: '',
              });
            } else {
              setFormData({ ...formData, gender: e.target.value });
            }
          }}
          style={{ width: 300 }}
        />
      </form>
    </Container>
  );
}

export default PersonalInfoStep;
