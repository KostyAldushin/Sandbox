import React,{Component} from "react"
import Select from "react-select"
// import { AsyncCreatable } from 'react-select-2';
import { Creatable } from 'react-select';
import Selec from "./selectstupid"
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: [
                {
                    sick: "Злой",
                },
                {
                    sick: "Добрый",
                },
                {
                    sick: "Крутой",
                },
                {
                    sick: "Дешевый",
                }]
        };
    }
openSelect=()=>{
        return
       <Select>
           <option>{this.state.character[1].sick}</option>
           <option>{this.state.character[0].sick}</option>
           <option>{this.state.character[2].sick}</option>
           <option>{this.state.character[3].sick}</option>
       </Select>
}
    render() {
        this.state.character.map((item, index) => {
        });
        return (
            <div className="menu-list">
                {this.state.character.map((item, index) => {
                        return <Select sick={item.sick}>
                </Select>

                    })
                }
                {/*<AsyncCreatable {this.state.character.sick} />*/}
                <button onClick={this.openSelect}>
                    <input onChange={this.openSelect} type="text" value="home" />добавить
                </button>
                {/*<div onClick={this.openSelect}>*/}

                    {/*/!*<div className="selected-item">{this.state.character}</div>*!/*/}
                    {/**/}
                    {/*/!*{this.state.character.map((option, index) => {*!/*/}
                        {/*/!*<div>{}</div>*!/*/}
                    {/*/!*})}*!/*/}
                    {/*/!*</div>*!/*/}

            {/*</div>*/}
            </div>
        );
    }
}
export default List