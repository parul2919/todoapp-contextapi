import React, { Component } from 'react';
import {Route, Switch } from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Loadable from 'react-loadable';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Header from './components/organism/header/header';
import TaskList from './components/organism/taskList/taskList';
import Modal from "./components/organism/modal/modal";
import './style.css'


const Loading = () => <div>Loading...</div>;
const HomeRoute = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */'./components/molecule/toDoItems'),
  loading: () => <div>loading...</div>,
  modules: ['homepage'],
});

const CompletedRoute = Loadable({
  loader: () => import(/* webpackChunkName: "completedTasks" */'./components/molecule/toDoItems'),
  loading: () => <div>loading...</div>,
  modules: ['completedTasks'],
});

const InProgressRoute = Loadable({
  loader: () => import(/* webpackChunkName: "inProgressRoutes" */'./components/molecule/toDoItems'),
  loading: () => <div>loading...</div>,
  modules: ['inProgressRoutes'],
});


const TaskFormLoadable = Loadable({
  loader: () => import(/* webpackChunkName: "dynamicLoading" */'./components/organism/taskForm/taskForm'),
  loading: () => <div>Loading...</div>,
  modules: ['dynamicLoading'],
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


