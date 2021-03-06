import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Song Title:</label>
          <input
            onChange={event =>
              this.setState({
                title: event.target.value
              })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation {
    addSong(title: )
  }
`;

export default SongCreate;
