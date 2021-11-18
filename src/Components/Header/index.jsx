import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div>
              <ol>
                <Link to="/profile" data-testid="link-to-profile">
                  <li>
                    Profile
                  </li>
                </Link>
                <Link to="/favorites" data-testid="link-to-favorites">
                  <li>Favotires</li>
                </Link>
                <Link to="/search" data-testid="link-to-search">
                  <li>Search</li>
                </Link>
              </ol>
              <h3 data-testid="header-user-name">
                {name}
              </h3>
            </div>
          )}
      </header>
    );
  }
}

export default index;
