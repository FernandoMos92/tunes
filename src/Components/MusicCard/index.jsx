import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import { addSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';

class index extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      isLoad: true,
    };
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleGetFavorite = this.handleGetFavorite.bind(this);
  }

  componentDidMount() {
    this.handleGetFavorite();
  }

  // Auxilio na lógica: Guilherme Augusto T16A
  handleGetFavorite() {
    const { song: { trackId } } = this.props;

    getFavoriteSongs().then((data) => {
      this.setState({ favorite: data.some(({ trackId: id }) => id === trackId) });
    });
  }

  handleFavorite() {
    const { song } = this.props;
    const { favorite } = this.state;

    if (!favorite) {
      this.setState({
        favorite: true,
        isLoad: false,
      });
      addSong(song).then(() => {
        this.setState({
          isLoad: true,
        });
      });
    } else {
      this.setState({ favorite: false });
    }
  }

  render() {
    const { isLoad, favorite } = this.state;
    const { audio, song } = this.props;
    return (
      <div>
        { isLoad ? (
          <div>
            <audio data-testid="audio-component" src={ audio } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
            <label htmlFor="favorite">
              Favorita
              <input
                onChange={ this.handleFavorite }
                checked={ favorite }
                type="checkbox"
                id="favorite"
                data-testid={ `checkbox-music-${song.trackId}` }
              />
            </label>
          </div>) : <Loading />}
      </div>

    );
  }
}

index.propTypes = {
  audio: PropTypes.string.isRequired,
  song: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default index;
