import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
const resultStyle = {
  border: "1px solid #eee",
  width: "260px",
  height: "120px",
  margin: "auto",
  marginTop: "10px",
  display: "block",
};
const ResultTodo = (props) => {
  // const [deletedata, setdeletedata] = useState(false);
  const [data, setdata] = useState([
    { name: "abra", age: "23" },
    { name: "abras", age: "23" },
    { name: "abrdad", age: "23" },
  ]);

  const deletedata = (index) => {

    // 0,0,index all pbjects will  delete by one click
    // index,1 will delete object 2&3 by on click ND 1 Will be const
    // splice (1) will delete one by one
    setdata(data.splice(1)); //splice remove items from array end 
  };
  const list = props.list;
  return (
    <Container>
      <div style={resultStyle}>
        {/* <Typography variant="h3" value={list}>
          {list} sss
        </Typography> */}
        {data.map((item, ind) => {
          return (
            <div key={ind}>
              <Typography variant="h3" value={list}>
                {item.name}
                {item.age}
              </Typography>
              <button onClick={deletedata}>delete </button>
            </div>
          );
        })}

        <Typography variant="h1">
          {list}
          <button onClick={deletedata}>delete </button>
        </Typography>
      </div>
    </Container>
  );
};

export default ResultTodo;
