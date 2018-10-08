import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from './components/organism/header/header';
import TaskList from './components/organism/taskList/taskList';
import Modal from "./components/organism/modal/modal";
import './style.css'

const Loading = () => <div>Loading...</div>;
const HomeRoute = Loadable({
  loader: () => import('./components/molecule/toDoItems'),
  loading: Loading,
});

const CompletedRoute = Loadable({
  loader: () => import('./components/template/completed'),
  loading: Loading,
});
const InProgressRoute = Loadable({
  loader: () => import('./components/template/inProgress'),
  loading: Loading,
});

const TaskFormLoadable = Loadable({
  loader: () => import('./components/organism/taskForm/taskForm'),
  loading: () => <div>Loading...</div>,
});

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
                <Switch>
                    <Route exact path="/" component={HomeRoute} openModal={this.openModal} closeModal={this.closeModal}/>
                    <Route exact path="/completed" component={CompletedRoute} />
                    <Route exact path="/inProgress" component={InProgressRoute} />
                </Switch>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
                  >
                    <TaskFormLoadable/>
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


