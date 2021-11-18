import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      verifyResponse: false,
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
    this.setState({ input: value }, () => {
      this.setState({
        isDisabled: !this.handleDisabled(),
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { response } = this.state;
    this.setState({
      isLoad: false,
      input: '',
    });
    const { input } = this.state;
    searchAlbumsAPI(input).then((data) => {
      this.setState({
        response: data,
        verifyResponse: true,
        phraseDefault: ` ${input}`,
        // Lógica concluida com o auxilo João (Lenny)
      });
    });
    if (response !== []) {
      this.setState({ isLoad: true });
    }
  }

  render() {
    const {
      isDisabled,
      input,
      isLoad,
      response,
      phraseDefault,
      verifyResponse,
    } = this.state;
    const { handleSubmit, handleInputChange } = this;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Procurar um artista..."
            data-testid="search-artist-input"
            onChange={ handleInputChange }
            name={ input }
            value={ input }
          />
          {!isLoad ? (
            <Loading />
          ) : (
            <button
              disabled={ isDisabled }
              type="submit"
              data-testid="search-artist-button"
              onClick={ handleSubmit }
            >
              Procurar
            </button>
          )}
          <h4>
            Resultado de álbuns de:
            {phraseDefault}
          </h4>
          {verifyResponse && (
            response.length > 0 ? (
              <div>
                <div>
                  {response.map((album) => {
                    const {
                      artworkUrl100,
                      artistName,
                      collectionName,
                      collectionId,
                    } = album;
                    return (
                      <Link
                        to={ `/album/${collectionId}` }
                        data-testid={ `link-to-album-${collectionId}` }
                        key={ collectionId }
                      >
                        <img src={ artworkUrl100 } alt={ collectionName } />
                        <p>{collectionName}</p>
                        <p>{artistName}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : (
              'Nenhum álbum foi encontrado'
            ))}
        </form>
      </div>
    );
  }
}

export default index;
