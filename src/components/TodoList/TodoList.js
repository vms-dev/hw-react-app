import React, { Component } from "react";
import "./TodoList.css";
import TodoItems from "../TodoItems/TodoItems";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items:[]
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                isCompleted: false
            };

            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                }
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);
        
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
         
        this.setState({
            items: filteredItems
        });
    }

    completeItem(key) {
        let stateCopy = { ...this.state };
        let indexItems = stateCopy.items.findIndex(function (item) {
            return (item.key === key);
        });

        if (typeof indexItems !== "undefined") {
            stateCopy.items[indexItems].isCompleted = true;
            this.setState(stateCopy);
        }
    }

    render() {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={ (a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                           delete={this.deleteItem}
                           complete={this.completeItem}
                />
            </div>
        );
    }    
}

export default TodoList;