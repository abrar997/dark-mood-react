import React, { useState } from "react";
import "./TodoList.css";
// import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Container, Typography } from "@mui/material";
import ResultTodo from "./ResultTodo";



// حتى اسوي قاءمة todo list  need to
// 1- input to write text
// 2- need to div or any thiing to recipe input value
// 3- btn to send data or we can instead btn by inter
const style = {
  margin: "auto",
  border: "1px solid rgb(22, 202, 22)",
  height: "300px",
  width: "300px",
  padding: "20px",
  textAlign: "center",
  textTransform: "capitalize",
  borderRadius: "10px",
  paddingTop: "60px",
};

const TodoList = () => {
  const [list, setlist] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  setlist('') //means after click on button add data send input back to be empty again
  };
  const handleChange = (e) => {
    setlist(e.target.value);
    console.log(e.target.value);
  
  
  };
  return (
    <Container sx={{ m: 5 }}>
      <form style={style} onClick={handleSubmit}>
        <Typography variant="h4">to do list</Typography>
        <Typography variant="subtitle2">list items</Typography>
        <div>
          <textarea
            type="text"
            name="text"
            onChange={handleChange}
            placeholder="add item for your list"
            id="text"
            value={list}
            autoComplete="off"
            style={{ width: "230px", height: "100px" }}
          />
   
        </div>   
        <Button
          style={{
            background: "rgb(22, 202, 22)",
            border: "none",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "17px",
            width: "80px",
          }}
        >
          {/* <TelegramIcon sx={{ color: "rgb(22, 202, 22)" }} /> */}
          send
        </Button>
      </form>
      {/*je;p me to diplay text but not save it if text delete from input will disappear from browser */}
      {/* <h2>{list} </h2> */}

      <div>
        <ResultTodo list={list} />{" "}
      </div>
    </Container>
  );
};

export default TodoList;
