import React, { Component } from "react";

import {ToDoContext} from '../toDoContext.js';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          todo: "Create todo app", 
          start:false,
          completed:false,
        },
        {
          todo: "Write route based implementations",
          start:false,
          completed:false,
        },
        {
          todo: "Mention Completed tasks",
          start:true,
          completed:true,
        },
        {
          todo: "Mention in progress tasks",
          start:true,
          completed:false,
        },
        {
          todo: "Marks tasks differently",
          start:true,
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
        value={{ list: this.state.list, 
                deleteItem: this.deleteItem, 
                startItem: this.startItem, 
                completeItem: this.completeItem,
                createItem: this.createNewToDoItem,
                handleInput:this.handleInput,
                handleKeyPress:this.handleKeyPress
        }}
      >
        <h1 className="bg-light p-4 mb-5">
            Simple To-Do App using React Context API
          </h1>
        
        {this.props.children}
        
        
      </ToDoContext.Provider>
    );
  }
}

export default ToDoList;
