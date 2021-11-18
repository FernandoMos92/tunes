import React, { Component } from 'react';

class index extends Component {
  constructor() {
    super();
    this.state = {
      switchValeu: true,
    };

    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleDisabled({ target }) {
    const { value } = target;
    const minValue = 2;
    this.setState({
      switchValeu: value.length < minValue,
    });
  }

  render() {
    const { switchValeu } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Procurar um artista..."
          data-testid="search-artist-input"
          onChange={ this.handleDisabled }
        />
        <button
          disabled={ switchValeu }
          type="submit"
          data-testid="search-artist-button"
        >
          Procurar
        </button>
      </form>
    );
  }
}

export default index;
