import React from 'react';
import './App.css';
import Home from './components/home/Home';
import ListBeers from './components/beer-list/ListBeers';
import { Route, Switch } from 'react-router-dom';
import SingleBeer from './components/single-beer/SingleBeer';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    allBeers: [],
    randomBeer: []
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({ allBeers: response.data });
      })
      .catch();
  }

  handleRandomBeer() {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response) => {
      this.setState({ randomBeer: response.data });
    })
    .catch();
  }

  render() {
    const { allBeers, randomBeer } = this.state;



    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route
            exact
            path="/random-beer"
            component={(props) => <SingleBeer {...props} randomBeer={randomBeer} />}
          />
          <Route
            exact
            path="/beers/:id"
            component={(props) => <SingleBeer {...props} allBeers={allBeers} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
