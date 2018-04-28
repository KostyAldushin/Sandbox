import React from "react"
const Select = (props) =>{
    console.log(props)
return(<div className="">
    <div className="header"></div>
    <h1 className="name_select">Тренер</h1>
    <div className="menu_select">{props.sick}</div>
    <div className="button_select"></div>

</div>)
}
export default Select;