import React,{Component} from "react"
import user from "./User.js"
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            number: "",
            userdate: [{
                name: "popka",
                age: 25,
                id: 12345,
            },
                {
                    name: "durak",
                    age: 23,
                    id: 12345,
                },
                {
                    name: "petya",
                    age: 26,
                    id: 12345,
                },]

        }
    }
    adduser(){
        {
            console.log("click");
            let newState = Object.assign({},this.state);
           let name = this.state.name
            let age = this.state.number
            let random_id = Math.floor(Math.random()*10000+99999);
            newState.userdate.push({
                name: name,
                age: age,
                id: random_id,
            });
            this.setState(newState);
        }
    }
    deleteuser =(key)=> {

        let newState = Object.assign({},this.state);
        newState.userdate.splice(key, 1)
        this.setState(newState)
    }
    changeInput = (e) => {
        let value = e.target.value;
        this.setState({
            name: value,
        });
        console.log(this.state.name)
    }
    changeNumber = (e) => {
        let value = parseInt(e.target.value, 10);
        this.setState({
            number: !isNaN(value) ? value : ''
        });
    }
    click(){
       console.log(this.state.name)
        console.log(this.state.number)
    }
    render(){
        this.state.userdate.map((post,index)=>{

        });
    {
        return (

            <div className="user-list">
                <div>
                    Заголовок
                    <button onClick={this.click.bind(this)}>
                        <input onChange={this.changeInput} type="text" />
                        <input onChange={this.changeNumber} type="text" />добавить
                    </button>
                    <p>
                        контент
                        <textarea cols="30" rows="10"></textarea>
                    </p>
                </div>
                <button onClick={this.adduser.bind(this)}>
                    Add New user
                </button>
                {this.state.userdate.map((date, index) => {
                    return <user>key={index}
                        name={date.name}
                        age={date.age}
                       id={date.id}
                        <button onClick={this.deleteuser.bind(this,index)}>
                            Delete user
                        </button>
                    </user>
                })}

            </div>
        )
    }

    }
}
export default UserList;