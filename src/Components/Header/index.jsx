import React, { Component } from 'react';
import Loading from '../Loading';
import { getUser } from '../../services/userAPI';

class index extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      isLoad: true,
    };

    this.handleUser = this.handleUser.bind(this);
  }

  componentDidMount() {
    this.handleUser();
  }

  async handleUser() {
    const reponse = await getUser();
    if (reponse) {
      this.setState({
        name: reponse.name,
        isLoad: false,
      });
    }
  }

  render() {
    const { name, isLoad } = this.state;
    return (
      <header data-testid="header-component">
        { isLoad ? <Loading />
          : (
            <h3 data-testid="header-user-name">
              {name}
            </h3>
          )}
      </header>
    );
  }
}

export default index;
