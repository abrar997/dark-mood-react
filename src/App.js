import React from "react";
import { Route, Routes } from "react-router-dom";
import DarkMode from "./Component/DarkMode/DarkMode";
const App=()=>{
  return (
    <>

      <Routes>
        <Route path="/DarkMode" element={<DarkMode />} />
      </Routes>
    </>
  );
}
export default App;  