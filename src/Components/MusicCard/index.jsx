import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import { addSong } from '../../services/favoriteSongsAPI';

class index extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
      isLoad: true,
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    const { trackId } = this.props;
    const { favorite } = this.state;

    if (!favorite) {
      this.setState({
        favorite: true,
        isLoad: false,
      });
      addSong(trackId).then(() => {
        this.setState({
          isLoad: true,
        });
      });
    } else {
      this.setState({ favorite: false });
    }
  }

  render() {
    const { favorite, isLoad } = this.state;
    const { audio, trackId } = this.props;
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
                data-testid={ `checkbox-music-${trackId}` }
              />
            </label>
          </div>) : <Loading />}
      </div>

    );
  }
}

index.propTypes = {
  audio: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default index;
