import React from "react";
import {  NavLink,Route, Routes } from "react-router-dom";
import DarkMode from "./Component/DarkMode/DarkMode";
import TodoList from "./Component/TodoList/TodoList";
import { Container } from "@mui/material";
import SpliceItems from "./Component/SpliceItems/SpliceItems";
import Trt from "./Component/Trt";
import JavaScriptConcept from "./Component/JavaScriptConcept/JavaScriptConcept";
import Nav from "./Errors/BootstarpStyle/Nav";
import Home from './Component/JavaScriptConcept/Home';
import ModalBox from "./Component/ModalBox/ModalBox";
import Hooks from "./Component/Hooks/Hooks";
const App = () => {
  return (
    <div>
      <Nav />
      <Container style={{ textAlign: "center", marginTop: "20px" }}>
        <div className="d-flex" style={{ justifyContent: "space-around" }}>
          <p>
            <NavLink to="/darkMode">DarkMode</NavLink>
          </p>
          <p>
            <NavLink to="/TodoList">TodoList</NavLink>
          </p>
          <p>
            <NavLink to="/SpliceItems">SpliceItems</NavLink>
          </p>
          <p>
            <NavLink to="/Trt">Trt</NavLink>
          </p>
          <p>
            <NavLink to="/Home">Home</NavLink>
          </p>
          <p>
            <NavLink to="/ModalBox">ModalBox</NavLink>{" "}
          </p>
          <p>
            <NavLink to="/Hooks">Hooks</NavLink>
          </p>
        </div>
        <Routes>
          <Route path="/darkMode" element={<DarkMode />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/SpliceItems" element={<SpliceItems />} />
          <Route path="/Trt" element={<Trt />} />
          <Route path="/JavaScriptConcept" element={<JavaScriptConcept />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ModalBox" element={<ModalBox />} />
          <Route path="Hooks" element={<Hooks />} />
        </Routes>
      </Container>
    </div>
  );
};
export default App;
