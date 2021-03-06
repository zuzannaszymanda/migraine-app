import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import axios from 'axios';

import Header from '../components/Header';
import Menubar from '../components/Menubar';
import Button from '../components/Button'
import HistoryWidget from './history/HistoryWidget'
import WeatherWidget from './weather/WeatherWidget'
import Join from './Join'

const HomeComponent = styled.div`
  justify-content: center;
  display: block;
  padding: 7rem 0;
  margin: 0;
  text-align: center;
`

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentMigraine: null,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/recent')
      .then(({ data }) => {
        this.setState({ recentMigraine: data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { recentMigraine } = this.state;

    if(localStorage.getItem('isLogged') === 'true'){
      return (
        <HomeComponent className="Home">
          <Header />
          <Link to="/add">
            <Button text="Add headache" />
          </Link>
          <HistoryWidget item={recentMigraine} />
          <WeatherWidget />
          <Menubar />
        </HomeComponent>
      );
    }
    else {
      return (
        // <HomeComponent className="Home">
        //   <Header />
        // </HomeComponent>
        <Join></Join>
      )
    }
  }
}

export default Home;
