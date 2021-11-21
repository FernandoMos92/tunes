import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';
import getMusics from '../services/musicsAPI';
// import './albumStyle.css';
import Loading from '../Components/Loading';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
      isLoad: false,
      favorites: [],
    };

    console.log(this);

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    // Lógica concluida com auxilio de Laura Fumgalli
    const { props: { match: { params: { id } } } } = this;
    getMusics(id).then((data) => this.setState({
      album: data,
      artistName: data[0].artistName,
      collectionName: data[0].collectionName,
      trackId: data[0].trackId,
    }));
  }

  handleFavorite({ target }) {
    console.dir(target.checked);
    if (target.checked) {
      this.setState({
        isLoad: true,

      });
    };
  }

  render() {
    const { album, artistName, collectionName, trackId, isLoad } = this.state;

    const validateAlbum = album.filter((musics) => musics.previewUrl !== undefined);
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h2 data-testid="album-name">{collectionName}</h2>
          <h3 data-testid="artist-name">{artistName}</h3>
        </div>
        { isLoad ? <Loading /> : (
          <ul>
            {validateAlbum.map(({ trackName, previewUrl }) => (
              <li key={ trackName }>
                <p>{trackName}</p>
                <MusicCard audio={ previewUrl } />
                <label htmlFor="favorite">
                  Favorita:
                  <input
                    data-testid={ `checkbox-music-${trackId}` }
                    onClick={ (e) => this.handleFavorite(e) }
                    type="checkbox"
                    name="favorite"
                    id="favorite"
                  />
                </label>
              </li>
            ))}
          </ul>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
