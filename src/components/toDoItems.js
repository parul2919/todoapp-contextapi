import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {ToDoContext} from '../toDoContext.js';
import "../style.css";


class ToDoItems extends React.Component {
  render() {
    return (
        <div className="col-6 offset-3  text-left">
              <ToDoContext.Consumer>
                {({ list, deleteItem,startItem, completeItem }) =>
                  list.map((item, key) => {
                    return (
                      <div key={key}>
                        <div className={item.completed ? 'completed d-inline-block col-7' : (item.start) ? 'started d-inline-block col-7' : 'd-inline-block col-7'}>{item.todo}</div>
                        <button className="button todo-inprogress" onClick={startItem.bind(this, key, item)}> IN PROGRESS</button>
                        <button className="button todo-complete" onClick={completeItem.bind(this, key, item)}> COMPLETE</button>
                        <button className="button todo-delete" onClick={deleteItem.bind(this, key)}> REMOVE</button>       
                      </div>
                    );
                  })
                }

              </ToDoContext.Consumer>
              <div className="link mt-5"> <Link className="btn btn-info d-inline-block" to="/new" >Create new task </Link> </div>
          </div>
    );
  }
}

export default ToDoItems;


