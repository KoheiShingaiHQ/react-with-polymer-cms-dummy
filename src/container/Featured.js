import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsFull from '../container/ContentsFull.js';
import ContentsHalf from '../container/ContentsHalf.js';

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="featured">
        <ContentsFull></ContentsFull>
        <ContentsHalf></ContentsHalf>
      </main>
    );
  }
}

export default Featured;