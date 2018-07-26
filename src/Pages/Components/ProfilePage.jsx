import React, { Component } from 'react';
import axios from 'axios';

class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          user: response.data,
          isLoading: false,
        });
      });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="mdc-layout-grid">
        <div className="mdc-card" style={{ marginTop: 80, padding: 20 }}>
          <h1>{this.state.isLoading ? 'Cargando...' : this.state.user.name}</h1>
          <h2>ID: {match.params.id}</h2>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
