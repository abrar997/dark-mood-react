import React, { useState } from "react";
import Form from "./Form/Form";
// ctrl+shit+down تحدد اللي تؤيد من تحت السطر 
// ctrl+shit+up تحدد اللي تؤيد من فوك السطر 
//alt+shit+down تنسخ السطر وتخلي تحتو 
import SuccesSignUp from "./SuccesSignUp"; 
const Hooks = () => {
  const [notClearStepSubmited,setNotClearStepSubmited]=useState(false)
  const notClearSubmited=()=>{
    setNotClearStepSubmited(true)
  }
  return (
    <div>
      {/* <Form /> */}
      {!notClearStepSubmited ? (
        <Form notClearSubmited={notClearSubmited} />
      ) : (
        <SuccesSignUp />
      )}
    </div>
  );
};

export default Hooks;
