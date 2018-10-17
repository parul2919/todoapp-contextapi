import React, { Component } from "react";

import {ToDoContext} from '../../../config/toDoContext';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      todo: ""
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/todo/taskList')
      .then(response => response.json())
      .then(data => this.setState({ list: data}));
  }
    
  createNewToDoItem = () => {
    this.setState(({ list, todo }) => ({
      list: [
        ...list,
        {
          todo: todo,
          status:'not started'
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
      list: list.map((item,index) => (index === indexToStart) ? {...item, status:'started'} : item )
    }));
  };

  completeItem = (indexToCmpt, item) => {
    this.setState(({ list }) => ({
      list: list.map((item,index) => (index === indexToCmpt &&  item.status === "started") ? {...item, status: "completed"} : item )
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

export default TaskList;
