import React, { Component } from 'react';
import axios from 'axios';

class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://randomuser.me/api/');

    console.log(response.data.results);

    this.setState({
      user: response.data.results[0],
    });
  }

  render() {
    console.log(this.state.user);

    return (
      <div className="mdc-layout-grid">
        <div className="mdc-card" style={{ marginTop: 80, padding: 20 }}>
          Tel: {this.state.user.phone || 'numero      '}
          Email: {this.state.user.email}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
