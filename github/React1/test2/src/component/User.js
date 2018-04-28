import React from "react"
const user = (props) =>{
    console.log(props);
    return (
        <div className = "">
          <div className="name">  {props.name}</div>
            <div className="age"> {props.age}</div>
            <div className="id"> {props.id}</div>
        </div>
    )
};
export default user;