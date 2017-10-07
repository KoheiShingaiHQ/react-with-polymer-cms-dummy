import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ContentPanel from '../container/ContentPanel.js';

class Article extends Component {
  render() {
    return (
      <main id="article">
        <ContentPanel></ContentPanel>
      </main>
    );
  }
}

export default Article;