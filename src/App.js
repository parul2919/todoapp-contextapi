import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import {ToDoContext} from './toDoContext';
import NewItem from './components/new';
import Header from './components/header';
import ToDoList from './components/toDoList';
import ToDoItems from './components/toDoItems';
import Completed from './components/completed';
import InProgress from './components/inProgress';
class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Header />
          <ToDoList>
            <Route exact path="/new" component={NewItem} />
            <Route exact path="/" component={ToDoItems} />
            <Route exact path="/completed" component={Completed} />
            <Route exact path="/inProgress" component={InProgress} />
          </ToDoList>
    </div>
        </Router>
    );
  }
}

export default App;


