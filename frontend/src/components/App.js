import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import styled, {injectGlobal} from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'

import { NavigationBar } from './navigation-bar.js'
import { About } from './about'
import { Home } from './home'
import { Map } from './map'


injectGlobal`
  body {
//    background: linear-gradient(#e6ffe6, #ffccee);
    font-family: 'Indie Flower', cursive;
    min-height: 100%;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    height: 100%;
  }
`;

const Main = styled.div`
  height: 100%;
`;


const Body = styled.div`
  position: relative;
  top: 4rem;
`;


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Main>
          <NavigationBar />
          <Body>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/map' component={Map} />
          </Body>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
