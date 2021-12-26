// import React, { useState } from "react";
// import { Container, Typography } from "@mui/material";
// const JavaScriptConcept = () => {
//   const data = ["1ahhh", "naba", "nggg"];
//   const [filterdata, setfilter] = useState([
//     { id: 1, type: "Pizza" },
//     { id: 1, type: "Taco" },
//     { id: 1, type: "Pasta" },
//     { id: 1, type: "Sandwich" },
//     { id: 1, type: "Pumpkin Pie" },
//   ]);
//   const mapDara = [...data, "aaa"];
//   // const handleFilter = () => {
//   //  const datafilter=  filterdata
//   //     .filter((x) => x.type.toLowerCase().includes("p"))
//   // };
//   return (
//     <div>
//       <Container>
//         <Typography variant="h6">
//           spreacd operator: use to get a data from array and print it in another
//           array <span style={{ color: "rgb(22, 202, 22)" }}> {mapDara} </span>
//         </Typography>
//         {/* we need irstly filter ith arroe function and then map with return or we can use startWith */}
//         {filterdata.filter((x)=>x.type.toLowerCase().includes('p')).map((item,ind)=>{
//       return <div key={ind}>{item.type}</div> 
//      })}
//         {/* <button onClick={handleFilter}>click</button> */}
//       </Container>
//       {/* {datafilter.map((name)=>{
// {name.type}
// })} */}
//     </div>
//   );
// };
// export default JavaScriptConcept;



// filter ,includes,tolowercase,startsWith,connact,join tammmm           
import React, { useState } from "react";


// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: "Andy", age: 32 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Tom Hulk", age: 40 },
  { id: 4, name: "Tom Hank", age: 50 },
  { id: 5, name: "Audra", age: 30 },
  { id: 6, name: "Anna", age: 68 },
  { id: 7, name: "Tom", age: 34 },
  { id: 8, name: "Tom Riddle", age: 28 },
  { id: 9, name: "Bolo", age: 23 },
];

const JavaScriptConcept=({data})=> {
  // const {data}=props  ///trans ata by this way or above way all ofthem work
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  const arrays = ["abrar", "nanma", "soloe"];
  const arrayss = ["ssss", "djsgs", "fafrsef"];

  // const arraryall=arrays.concat(arrayss)
  const arraryall=arrays.join(arrayss,'')
  console.log(arraryall);


  
  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id"> id: {user.id}</span>
              <span className="user-name"> , Name :{user.name}</span>
              <span className="user-age">, age: {user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
      <div style={{background:"#eee"}}>{data.length>1?data.map((item)=>{
        return <div>{item.job} </div>
      }):<h1> empty</h1>}</div>
    </div>
  );
}

export default JavaScriptConcept;