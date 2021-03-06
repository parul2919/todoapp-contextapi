import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {ToDoContext} from '../toDoContext.js';
import RouteLink from'./atom/link.js';
import Button from'./atom/button.js';
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
                            <Button
                                className="button todo-inprogress"
                                labelContent="IN PROGRESS"
                                onClick={startItem.bind(this, key, item)}
                            />
                            <Button
                                className="button todo-complete"
                                labelContent="COMPLETE"
                                onClick={completeItem.bind(this, key, item)}
                            />
                            <Button
                                className="button todo-delete"
                                labelContent="REMOVE"
                                onClick={deleteItem.bind(this, key)}
                            />     
                      </div>
                    );
                  })
                }

              </ToDoContext.Consumer>
              <RouteLink 
                  wrapperClass="link mt-5"
                  className="btn btn-info d-inline-block"
                  labelContent="Create new task"
                  route="/new"
              />
          </div>
    );
  }
}

export default ToDoItems;
