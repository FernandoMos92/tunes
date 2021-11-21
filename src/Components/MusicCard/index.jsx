import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
  render() {
    // console.log(this.props);
    const { audio } = this.props;
    return (
      <audio data-testid="audio-component" src={ audio } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
    );
  }
}

index.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default index;
