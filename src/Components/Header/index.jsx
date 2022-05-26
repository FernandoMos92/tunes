import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { getUser } from "../../services/userAPI";
import { HiOutlineUserCircle } from 'react-icons/hi';
import Menu from '../../style/Header-style';

class index extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
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
      <header>
        {isLoad ? (
          <Loading />
        ) : (
          <Menu>
            <ol>
              <Link to="/profile">
                <li>Profile</li>
              </Link>
              <Link to="/favorites">
                <li>Favotires</li>
              </Link>
              <Link to="/search" >
                <li>Search</li>
              </Link>
            </ol>

            <div className="container-user">
                <p>{name}</p>
                <HiOutlineUserCircle className="icon-user"/>
            </div>
          </Menu>
        )}
      </header>
    );
  }
}

export default index;
