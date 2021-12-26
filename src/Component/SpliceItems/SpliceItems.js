import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
const style = {
  marginTop: "100px",
  border: "1px solid rgb(22, 202, 22)",
  padding: "30px",
};
 const typostyle = {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
  };

const SpliceItems = () => {
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
  return (
    <Container>
      <div style={style}>
        {/* <Typography variant="h3" value={list}>
          {list} sss
        </Typography> */}
        <ol start="8">
          {data.map((item, ind) => {
            return (
              <div key={ind} style={typostyle}>
                <li>
                  <Typography variant="subtitle2" sx={{ mt: 3 }}>
                    - {item.name}
                    {item.age}
                  </Typography>
                </li>
                <Button onClick={deletedata}>delete </Button>
              </div>
            );
          })}
        </ol>
      </div>
    </Container>
  );
};

export default SpliceItems;
