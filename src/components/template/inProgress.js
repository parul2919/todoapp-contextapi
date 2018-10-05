import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tasks from '../molecule/tasks';


class InProgress extends React.Component {
  render() {
    return (
        <Tasks className="started" labelContent="started"/> 
    );
  }
}

export default InProgress;



