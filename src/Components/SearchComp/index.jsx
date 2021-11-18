import React, { Component } from 'react';

class index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isDisabled: true,
    };

    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDisabled() {
    const { input } = this.state;
    const minValue = 2;
    if (input.length >= minValue) {
      return true;
    }
    return false;
  }

  handleSubmit({ target }) {
    const { value } = target;
    this.setState({ input: value }, () => {
      this.setState({ isDisabled: !this.handleDisabled() });
    });
  }

  render() {
    const { isDisabled, input } = this.state;
    const { handleSubmit } = this;
    return (
      <form>
        <input
          type="text"
          placeholder="Procurar um artista..."
          data-testid="search-artist-input"
          onChange={ handleSubmit }
          name={ input }
          value={ input }
        />
        <button
          disabled={ isDisabled }
          type="submit"
          data-testid="search-artist-button"
          onClick={ handleSubmit }
        >
          Procurar
        </button>
      </form>
    );
  }
}

export default index;
