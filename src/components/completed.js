import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ToDoContext} from '../toDoContext.js';

import "../style.css";


class Completed extends React.Component {
  render() {
    return (
        <Tasks className="completed"/>
      
    );
  }
}

export default Completed;
