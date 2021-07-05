import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: []
  }
  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    axios
      .get('/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      });
  }
}

export default requiresAuth(Users);