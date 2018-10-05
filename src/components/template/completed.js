import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tasks from '../molecule/tasks';

class Completed extends React.Component {
  render() {
    return (
        <Tasks className="completed" labelContent="completed"/> 
    );
  }
}

export default Completed;
