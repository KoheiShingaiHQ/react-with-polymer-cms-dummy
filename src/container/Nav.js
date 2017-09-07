import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <ul data-selected={window.location.pathname}>{menu}</ul>
      </nav>
    );
  }
}

var menu = [];
var data = [
  {name: 'Article', path: '/article'},
  {name: 'About', path: '/about'},
  {name: 'Featured', path: '/'}
];
for(var i in data){
  menu.push(<Link to={data[i].path} key={data[i].name}><li className={data[i].name}>{data[i].name}</li></Link>);
}

export default Nav;