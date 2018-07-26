import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.setState({
      user: {
        name: "Roberto Nuñez",
        age: 45,
        title: "Senior",
      },
    });
  }

  render() {
    console.log(this.state.user);

    return (
      <div className="mdc-layout-grid">
        <div className="mdc-card" style={{ marginTop: 80, padding: 20 }}>
          <h2>{this.state.user.name}</h2>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
