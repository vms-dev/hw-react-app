import React, { Component } from "react";
import "./TodoItems.css";
import btnCompleted from './btn-completed.png';
import btnDelete from './btn-delete.png';


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    complete(key) {
        this.props.complete(key);
    }

    // createTasks(item) {
    //     return (
    //         <li key={item.key}>
    //             <label className={"todoMsg" + (item.isCompleted ? '-completed' : '')}>{item.text}</label>
    //             <button className="completeBtn" onClick={() => this.complete(item.key)}>E</button>
    //             <button className="deleteBtn" onClick={() => this.delete(item.key)}>D</button>
    //         </li>
    //     );
    // }
 
    createTasks(item) {
        return (
            <li key={item.key}>
                <label className={"todoMsg" + (item.isCompleted ? '-completed' : '')}>{item.text}</label>
                <img className="deleteBtn" onClick={() => this.delete(item.key)} src={btnDelete} alt=""/>
                <img className="completeBtn" onClick={() => this.complete(item.key)} src={btnCompleted} alt=""/>                
            </li>
        );
    }


    render() {
        var listItems = this.props.entries.map(this.createTasks);
 
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};
 
export default TodoItems;