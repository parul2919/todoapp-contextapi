import React, { Component } from "react";
import Tasks from '../molecule/tasks';


class InProgress extends Component {
  render() {
    return (
        <Tasks className="started" labelContent="started"/> 
    );
  }
}

export default InProgress;



