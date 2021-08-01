import React, { Component } from 'react';
import axios from 'axios';
import Beer from './Beer';
import Header from '../header/Header';

class ListBeers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ allBeers: response.data });
      })
      .catch();
  }

  render() {
    const { allBeers } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
            <div className="row">
                {allBeers.map((beer) => (
                <Beer {...beer} key={beer._id}/>
            ))}
            </div>
          
        </div>
      </div>
    );
  }
}
export default ListBeers;
