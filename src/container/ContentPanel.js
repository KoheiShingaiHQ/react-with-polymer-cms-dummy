import React, { Component } from 'react';
import ArticleHeader from '../container/ArticleHeader.js';
import ContentTimeline from '../container/ContentTimeline.js';
import ReactDOM from 'react-dom';

class ContentPanel extends Component {
  render() {
    return (
      <article id="content-panel">
        <ArticleHeader></ArticleHeader>
        <ContentTimeline month="Sep 1"></ContentTimeline>
        <ContentTimeline month="Sep 2"></ContentTimeline>
        <ContentTimeline month="Sep 3"></ContentTimeline>
      </article>
    );
  }
}

export default ContentPanel;