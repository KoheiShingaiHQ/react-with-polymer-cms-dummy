import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { menu : [] }
  }

  componentDidMount() {
    var menu = [];
    var data = [
      {name: 'Article', path: '/article'},
      {name: 'About', path: '/about'},
      {name: 'Featured', path: '/'}
    ];
    for(var i in data){
      menu.push(<Link to={data[i].path} key={data[i].name}><li className={data[i].name}>{data[i].name}</li></Link>);
    }
    this.setState({ menu : menu });
  }
  render() {
    return (
      <nav>
        <ul data-selected={window.location.hash.split("#").join("").split("/")[1]}>
          {this.state.menu}
        </ul>
      </nav>
    );
  }
}

export default Nav;