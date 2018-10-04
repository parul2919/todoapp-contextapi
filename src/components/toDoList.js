import React, { Component } from "react";
import {ToDoContext} from '../toDoContext.js';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          todo: "clean the house", 
          start:false,
          completed:false,
        },
        {
          todo: "buy milk",
          start:false,
          completed:false,
        }
      ],
      todo: ""
    };
  }

  createNewToDoItem = () => {
    this.setState(({ list, todo }) => ({
      list: [
        ...list,
        {
          todo: todo,
          start:false,
          completed:false,
        }
      ],
      todo: ""
    }));
  };

  deleteItem = indexToDelete => {
    this.setState(({ list }) => ({
      list: list.filter((ToDoList, index) => index !== indexToDelete)
    }));
  };
  
  startItem = (indexToStart, item) => {
    this.setState(({ list }) => ({
      list: list.map((item,index) => (index === indexToStart) ? {...item, start: !list.start} : item )
    }));
  };

  completeItem = (indexToCmpt, item) => {
    this.setState(({ list }) => ({
      list: list.map((item,index) => (index === indexToCmpt &&  item.start === true) ? {...item, completed: !list.completed} : item )
    }));
  };


  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createNewToDoItem();
      }
    }
  };

  handleInput = e => {
    this.setState({
      todo: e.target.value
    });
  };

  render() {
    return (
      <ToDoContext.Provider
        value={{ list: this.state.list, deleteItem: this.deleteItem, startItem: this.startItem, completeItem: this.completeItem }}
      >
        <div className="ToDo">
          <h1 className="ToDo-Header">
            Simple To-Do App using React Context API
          </h1>
          <div className="ToDo-Container">
            <input
              type="text"
              value={this.state.todo}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />

            <button className="button todo-add" onClick={this.createNewToDoItem}>
              ADD ITEM
            </button>
          </div>
        </div>

        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}

export default ToDoList;
