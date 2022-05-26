import React, { Component } from 'react';

import Header from '../Components/Header';
import SearchComp from '../Components/SearchComp';

class Search extends Component {
  render() {
    return (
      <>
        <Header />

        <div>
          <SearchComp />
        </div>
      </>
    );
  }
}

export default Search;
