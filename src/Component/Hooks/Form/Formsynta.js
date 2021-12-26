// import styled from ''
import  { useCallback, useEffect, useState } from "react"; 
// alt+shift+down select  a text
const Formsynta = (validate, callback) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, seterrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleChange = (e) => {
    const { nam, value } = e.target;
    setValues({ ...values, [nam]: value }); //[use bcz group of items ]
    console.log(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // to display validation
    seterrors(validate(values));
    setIsSubmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors, isSubmiting };
};

export default Formsynta;