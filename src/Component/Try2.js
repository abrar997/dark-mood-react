import React, { Component } from "react";
class Try2 extends Component{
    state={
        myFamily:
            [{id:1,name:"Samer"},
            {id:2,name:"Mustafa"},
            {id:3,name:"Taha"},
            {id:4,name:"Saif"}
        ]
    }
    getDisplayClasses() {
        let classes = "";
        const {nowState}=this.props;
        console.log(nowState);
         classes = ( nowState=== true) ? "block" :"none";
        return classes;
    }

 
    UpdateList=itemId => {
        console.log("itemId=====" +itemId)
        const myFamily=[...this.state.myFamily];
        myFamily.splice(itemId-1,1,{id:itemId,name:"Rana"});

        console.log(myFamily);
        const index=myFamily.indexOf(itemId);
        // console.log("index===="+index);
        myFamily[index]={...itemId};
        this.setState({myFamily});
    }
    
    render(){
        const displayList=this.state.myFamily.map((item) => {
            return(
                <li key={item.id} onClick={()=> this.UpdateList(item.id)}>{item.name}</li>
            )
        })
        return(
            <div>
                <ul id="ul" style={{display:this.getDisplayClasses()}}>
                   {displayList}
                </ul>
               
            </div>
        )
    }
}
export default Try2;