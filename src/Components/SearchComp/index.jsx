import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import ContainerSearch from '../../style/Search-style';
import '../../style/style.css';


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
    const { response, input } = this.state;
    this.setState({
      isLoad: false,
      input: '',
    });
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
      <span>
        <ContainerSearch>
          <form>
            {!isLoad ? (
              <Loading />
            ) : (
              <>
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
                  search
                  <AiOutlineSearch className='icon-search'/>
                </button>
              </>
            )}
          </form>
        <span className='result-search'>
        <h4>Resultado de álbuns de:</h4>
        <span>{phraseDefault}</span>
        </span>
        </ContainerSearch>
        <section className='container-result'>
          {verifyResponse && (
              response.length > 0 ? (
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
                          <img
                            src={ artworkUrl100 }
                            alt={ collectionName }
                            id={ collectionId }
                          />
                          <div className='information-artist'>
                            <span>
                              <h3>Artist:</h3>
                              {artistName}
                            </span>
                            <span>
                              <h3>Collection:</h3>
                              {collectionName}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
              ) : (
                'Nenhum álbum foi encontrado'
              ))}
        </section>
      </span>
    );
  }
}

export default index;
