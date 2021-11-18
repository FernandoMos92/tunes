import React, { Component } from 'react';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

class index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isDisabled: true,
      isLoad: true,
      response: [],
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
    const { input } = this.state;
    const { value } = target;

    this.setState({ input: value });
    this.setState({
      isDisabled: !this.handleDisabled(),
    });

    searchAlbumsAPI(input).then((data) => {
      this.setState({ response: data });
    });
  }

  render() {
    const { isDisabled, input, isLoad, response } = this.state;
    const { handleSubmit } = this;
    return (
      <div>
        { !isLoad ? <Loading />
          : (
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
          )}
      </div>
    );
  }
}

export default index;
