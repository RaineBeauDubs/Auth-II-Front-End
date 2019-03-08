import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';

import Login from './login/Login';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Auth-II!</h1>
        <header>
          <nav>
            <NavLink to='/login'>Log-In</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <button onClick={this.logout}>Log-Out</button>
          </nav>
        </header>
        <main>
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(App);
