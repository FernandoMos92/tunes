import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import MusicCard from '../Components/MusicCard';
import getMusics from '../services/musicsAPI';
// import './albumStyle.css';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
    };
  }

  componentDidMount() {
    // Lógica concluida com auxilio de Laura Fumgalli
    const { props: { match: { params: { id } } } } = this;
    getMusics(id).then((data) => this.setState({
      album: data,
      artistName: data[0].artistName,
      collectionName: data[0].collectionName,
      // trackId: data[0].trackId,
    }));
  }

  render() {
    const { album, artistName, collectionName } = this.state;
    const validateAlbum = album.filter((musics) => musics.previewUrl !== undefined);
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h2 data-testid="album-name">{collectionName}</h2>
          <h3 data-testid="artist-name">{artistName}</h3>
        </div>
        <ul>
          {validateAlbum.map(({ trackName, previewUrl, trackId }) => (
            <li key={ trackName }>
              <p>{trackName}</p>
              <MusicCard audio={ previewUrl } trackId={ trackId } />
            </li>
          ))}
        </ul>
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
