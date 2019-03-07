import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';

import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Auth-II!</h1>
        <header>
          <nav>
            <NavLink to='/login'>Log-In</NavLink>
          </nav>
        </header>
        <main>
          <Route path='/login' component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
