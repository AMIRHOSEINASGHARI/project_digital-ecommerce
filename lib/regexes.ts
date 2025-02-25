const regexes = {
  name: /^[a-zA-Z\s]+$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phoneNumber: /^09\d{9}$/,
};

export default regexes;
