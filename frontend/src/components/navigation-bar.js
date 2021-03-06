import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Nav = styled.nav`
  font-size: 1.5rem;
  background-color: #000000;
  height: 4rem;
  width: 100%;
  position: fixed;
  padding-left: 30rem;
  z-index: 2;
`;


const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
`;

const Li = styled.li`
  float: left;
`;

const A = styled(NavLink)`
  display: block;
	color: #b7d4d4;
  padding: 1rem 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }

  &.active {
    font-weight: bold;
  }
`;


export class NavigationBar extends Component {

  render() {
    return (
      <div>
        {/*<Title>South-east Asia 3-months itinerary</Title>*/}
        <Nav>
          <Ul>
            <Li>
              <A exact activeClassName='active' to="/">Home</A>
            </Li>
            <Li>
              <A activeClassName='active' to="/map">Travel map</A>
            </Li>
            <Li>
              <A activeClassName='active' to="/gallery">Gallery</A>
            </Li>
            <Li>
              <A activeClassName='active' to="/about">About</A>
            </Li>
            <Li>
              <A activeClassName='active' to="/qa">Q & A</A>
            </Li>
          </Ul>
        </Nav>
      </div>
    )
  }
};