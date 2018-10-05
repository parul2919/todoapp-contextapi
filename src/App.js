import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import {ToDoContext} from './config/toDoContext';
import TaskForm from './components/organism/taskForm/taskForm';
import Header from './components/organism/header/header';
import TaskList from './components/organism/taskList/taskList';
import ToDoItems from './components/molecule/toDoItems';
import Completed from './components/template/completed';
import InProgress from './components/template/inProgress';
import Modal from "./components/organism/modal/modal";
import './style.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  render() {
    return (
        <Router>
          <div className="App">
              <Header openModal={this.openModal} closeModal={this.closeModal}/>
              <TaskList>
                <Route exact path="/" component={ToDoItems} />
                <Route exact path="/new" component={TaskForm} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/inProgress" component={InProgress} />
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
                  >
                    <TaskForm/>
                </Modal>
              </TaskList>
              
          </div>
        </Router>
    );
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
}

export default App;


