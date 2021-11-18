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
      phraseDefault: '',
    };

    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDisabled() {
    const { input } = this.state;
    const minValue = 2;
    if (input.length >= minValue) {
      return true;
    }
    return false;
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({ input: value });

    this.setState({
      isDisabled: !this.handleDisabled(),
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { response } = this.state;
    this.setState({ isLoad: false });
    const { input } = this.state;
    await searchAlbumsAPI(input).then((data) => {
      this.setState({
        response: data,
        // Lógica concluida com o auxilo João (Lenny)
        phraseDefault: ` ${data[1].artistName}`,
      });
    });
    if (response !== []) {
      this.setState({ isLoad: true });
    }
  }

  render() {
    console.log(this);
    const { isDisabled, input, isLoad, response, phraseDefault } = this.state;
    const { handleSubmit, handleInputChange } = this;
    return (
      <div>
        { !isLoad ? <Loading />
          : (
            <form>
              <input
                type="text"
                placeholder="Procurar um artista..."
                data-testid="search-artist-input"
                onChange={ handleInputChange }
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
              <p>
                Resultado de álbuns de:
                {phraseDefault}
              </p>
            </form>
          )}
      </div>
    );
  }
}

export default index;
