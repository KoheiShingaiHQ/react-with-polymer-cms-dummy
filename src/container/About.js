import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentsSquare from '../container/ContentsSquare.js';

class About extends Component {
  render() {
    const data = [
      {main: "Square article 1", sub: "Something about square article."},
      {main: "Square article 2", sub: "Something about square article."},
      {main: "Square article 3", sub: "Something about square article."},
      {main: "Square article 4", sub: "Something about square article."},
      {main: "Square article 5", sub: "Something about square article."},
      {main: "Square article 6", sub: "Something about square article."},
      {main: "Square article 7", sub: "Something about square article."},
      {main: "Square article 8", sub: "Something about square article."},
      {main: "Square article 9", sub: "Something about square article."},
    ];
    return (
      <main id="about">
        <ContentsSquare data={data}></ContentsSquare>
      </main>
    );
  }
}

export default About;