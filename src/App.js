import React from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import DarkMode from "./Component/DarkMode/DarkMode";
import TodoList from './Component/TodoList/TodoList'
import { Container } from "@mui/material";
const App=()=>{
  return (
    <Container>
      <Link to="/DarkMode">DarkMode</Link>
      <Link to="/TodoList">TodoList</Link>
      <Routes>
        <Route path="/DarkMode" element={<DarkMode />}/>
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </Container>
  );
}
export default App;  