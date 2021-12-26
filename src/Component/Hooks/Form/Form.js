import React from "react";

// عجيبب كيف ممكن لملمة توكف الكود 
// required كلمة هي الي جانت موكفة الشغل 
import { Button, Typography } from "@mui/material";
import Formsynta from "./Formsynta";
import validate from "./ValidateInfo";

const stylebox = {
  border: "2px  solid gray",
  padding: "30px",
  display: "flex",
  flexFlow:"column"
};
const Form = ({ notClearSubmited }) => {
  const { handleSubmit, handleChange, values, errors } = Formsynta(
    validate,
    notClearSubmited
  );
  // defaultValue use with uncontroll input and solve console error here
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form"
        style={stylebox}
        noValidate
      >
        <Typography variant="h5">form with hooks1 </Typography>
        <>
          <Typography variant="subtitile1" sx={{ mt: 2 }}>
            user name
          </Typography>
          <input
            type="text"
            placeholder="user name"
            onChange={handleChange}
            defaultValue={values.name}
            name="text"
          />
          {errors.name && <p style={{ color: "red" }}> {errors.name} </p>}
        </>
        <>
          <Typography variant="subtitile1" sx={{ mt: 2 }}>
            email
          </Typography>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            defaultValue={values.email}
            // required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </>
        <>
          <Typography variant="subtitile1" sx={{ mt: 2 }}>
            password
          </Typography>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            defaultValue={values.password}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </>
        <>
          <Typography variant="subtitile1" sx={{ mt: 2 }}>
            confirm password
          </Typography>
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            defaultValue={values.confirmpassword}
          />
          {errors.confirmpassword && (
            <p style={{ color: "red" }}> {errors.confirmpassword} </p>
          )}
        </>
        <Button
          className=" mt-4"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Sign up
        </Button>{" "}
      </form>
    </div>
  );
};

export default Form;
