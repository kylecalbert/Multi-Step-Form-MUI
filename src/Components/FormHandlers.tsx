export const handleUsernameChange = (event: any, setUsername: any) => {
  setUsername(event.target.value);
};

export const handlePasswordChange = (event: any, setPassword: any) => {
  setPassword(event.target.value);
};
export const handleSubmit = (formData: any) => {
  console.log(formData);
};
