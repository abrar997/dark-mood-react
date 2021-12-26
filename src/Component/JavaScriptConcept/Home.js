import { Button } from "@mui/material";
import React,{useState} from "react";
import JavaScriptConcept from "./JavaScriptConcept";
const Home = () => {
 const [data, setdata] = useState([
{job:"front",num:"123"},{job:"back",num:"456"},{job:"full",num:"456"} ])
 const [pushdata,setPushdata]=useState([
    'aas','fffff','ddddddddddddd','dfgghh'])
const PushHAndle =()=>{
    // const pusggg=pushdata.push()
// console.log(pusggg);
console.log(pushdata.pop());
console.log(pushdata.push());

}
// useEffect(() => {
// PushHAndle()

// }, [])

    return (
    <div>
      hello
<div><Button onClick={()=>PushHAndle()}>push</Button></div>







      <JavaScriptConcept data={data} />
    </div>
  );
};
export default Home;
