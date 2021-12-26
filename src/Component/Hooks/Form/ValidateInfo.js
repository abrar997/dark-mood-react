export default function ValidateInfo (values) {
  let errors = {}; // {} bcz diferrent values inter to input and gor all values u have to shoew this error

  // username
  if (!values.name.trim()) {
    // ! means not true //  .trim() means valu is empty '' and appera already 
    errors.name = "user name is required";
  }

  // email
 if (!values.email) { 
   errors.email = "Email required";
 } else if (!/\S+@\S+\.\S+/.test(values.email)) { //this instead of required word
   errors.email = "Email address is invalid";
 }

  // password
  if (values.password.length < 6) {
    errors.password = "password needs to be 6 or more than ";
  } else if (!values.password) {
    errors.password = "password is required";
  }
  // confirm password
  if (!values.confirmpassword) {
    errors.confirmpassword = "password is required";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "passwords do not match ";
  }

  return errors ;
};

// export default ValidateInfo;
