import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();

    console.log(this);
  }
  render() {
    const { isDisabled, handleDisabled } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="input-name">
            Username:

            <input
              id="input-name"
              name="input-name"
              type="text"
              data-testid="login-name-input"
              maxLength="20"
              onChange={ (event) => handleDisabled(event) }
              // onClick={ createUser() }
            />
            <input
              disabled={ isDisabled }
              id="btn-login"
              type="button"
              value="Entrar"
              data-testid="login-submit-button"
            />
          </label>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleDisabled: PropTypes.func.isRequired,
};

export default Login;
