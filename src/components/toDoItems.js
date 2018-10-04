import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {ToDoContext} from '../toDoContext.js';

import "../style.css";


class ToDoItems extends React.Component {
  render() {
    return (
        <Fragment>
      <ToDoContext.Consumer>
        {({ list, deleteItem,startItem, completeItem }) =>
          list.map((item, key) => {
            return (
              <div key={key}>
                <div className={item.completed ? 'completed' : (item.start) ? 'started' : ''}>{item.todo}</div>
                <button className="button todo-inprogress" onClick={startItem.bind(this, key, item)}> IN PROGRESS</button>
                <button className="button todo-complete" onClick={completeItem.bind(this, key, item)}> COMPLETE</button>
                <button className="button todo-delete" onClick={deleteItem.bind(this, key)}> REMOVE</button>       
              </div>
            );
          })
        }
        
      </ToDoContext.Consumer>
      <div className="link"> <Link className="nav-link active" to="/new" >Create new task </Link> </div>
          </Fragment>
    );
  }
}

export default ToDoItems;


