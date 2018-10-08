import React, { Component } from "react";
import Tasks from '../molecule/tasks';

class Completed extends Component {
  render() {
    return (
        <Tasks className="completed" labelContent="completed"/> 
    );
  }
}

export default Completed;
