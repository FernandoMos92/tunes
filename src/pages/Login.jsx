import { FaUserCircle } from 'react-icons/fa';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './loginStyle.css';

class Login extends Component {
  render() {
    const { isDisabled, handleDisabled } = this.props;
    return (
      <>
        <h2>TrybeTunes</h2>
        <div className="container-login" data-testid="page-login">
          <form>
            <label htmlFor="input-name">
              <input
                id="input-name"
                className="input-name"
                name="input-name"
                type="text"
                data-testid="login-name-input"
                maxLength="20"
                onChange={ (event) => handleDisabled(event) }
                placeholder="Username"
              />
              <input
                disabled={ isDisabled }
                id="btn-login"
                className="btn-login"
                type="button"
                value="Entrar"
                data-testid="login-submit-button"
              />
            </label>
          </form>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleDisabled: PropTypes.func.isRequired,
};

export default Login;
