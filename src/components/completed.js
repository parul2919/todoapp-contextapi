import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ToDoContext} from '../toDoContext.js';

import "../style.css";


class Completed extends React.Component {
  render() {
    return (
      <ToDoContext.Consumer>
        {({ list}) =>
          list.map((item, key) => {
            return (
                <div className='completed'>{item.completed ? item.todo : ''}</div>
            );
          })
        }
      </ToDoContext.Consumer>
    );
  }
}

export default Completed;


