import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {ToDoContext} from '../../../config/toDoContext';


class TaskForm extends Component {
  

  render() {
      return (
      <ToDoContext.Consumer>
        {({ list, createItem,handleInput, handleKeyPress  }) =>(
            <Fragment>
            <div className="ToDo-Container">
                <input
                  type="text"
                  onChange={handleInput.bind(this)}
                  onKeyPress={handleKeyPress.bind(this)}
                />
                <button className="button todo-add" onClick={createItem.bind(this)}>
                  ADD ITEM
                </button>
              </div>
                 {
                    list.map((item, index)=>(
                        <div key={index}>{item.todo }</div>
                    ))
                 }
            </Fragment>
                  
                  
            )
          
        }
      </ToDoContext.Consumer>
    );
  }
}

export default TaskForm;



