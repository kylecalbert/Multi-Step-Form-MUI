import { TextField, Container } from '@material-ui/core';
import { handleSubmit } from './FormHandlers';

function PersosnalInfoStep({ formData, setFormData }: any) {
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
          error={formData.addressError ? true : false}
          helperText={formData.addressError}
          label="Address"
          margin="normal"
          variant="outlined"
          value={formData.address}
          onChange={(e) => {
            if (formData.addressError) {
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
          error={formData.genderError ? true : false}
          helperText={formData.genderError}
          margin="normal"
          variant="outlined"
          value={formData.gender}
          onChange={(e) => {
            if (formData.genderError) {
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

export default PersosnalInfoStep;
