import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../Components/Loading';
import { createUser } from '../services/userAPI';

import './loginStyle.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isLoad: false,
      returnApi: false,
      isDisabled: true,

    };

    this.handleData = this.handleData.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  handleData({ target }) {
    const { name, value } = target;
    const minCharacter = 3;

    this.setState(() => ({
      [name]: value,
      isDisabled: value.length < minCharacter,
    }));
  }

  async fetchApi() {
    const { name } = this.state;
    this.setState({
      isLoad: true,
    });

    const response = await createUser({ name });
    if (response === 'OK') {
      this.setState({
        isLoad: false,
        returnApi: true,
      });
    }
  }

  render() {
    const { isLoad, name, returnApi, isDisabled } = this.state;

    return (
      <div data-testid="page-login">
        {isLoad ? <Loading />
          : (
            <div className="container-login">
              <h2>TrybeTunes</h2>
              <form>
                <label htmlFor="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={ name }
                    onChange={ (event) => this.handleData(event) }
                    data-testid="login-name-input"
                    className="input-name"
                    maxLength="20"
                    placeholder="Username"
                  />
                  <button
                    disabled={ isDisabled }
                    id="btn-login"
                    className="btn-login"
                    type="button"
                    data-testid="login-submit-button"
                    onClick={ () => this.fetchApi() }
                  >
                    Entrar
                  </button>
                </label>
              </form>
            </div>
          )}
        { returnApi && <Redirect to="./search" /> }

      </div>
    );
  }
}

export default Login;
