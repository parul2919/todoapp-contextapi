import React, { Component } from 'react';
import{Link} from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <header className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <span className="navbar-brand d-flex align-items-center">
            Todo App Using Context Api
          </span>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              
              <li className="nav-item">
                <Link className="nav-link active" to="/" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-4" to="/new" >New</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-4" to="/inProgress">In Progress</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ml-4" to="/completed">Completed</Link>
              </li>
              
            </ul>
          </div>
        </div>
    </header>  
    );
  }
}

export default Header;

