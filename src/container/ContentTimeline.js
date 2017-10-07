import React, { Component } from 'react';

class ContentTimeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <section className="content-timeline">
          <time>
            <span>2017</span>
            <span>{this.props.month}</span>
          </time>
          <div className="line"></div>
          <a>
            <div className="content">
              <h2>Something</h2>
              <p>Something about this timeline.</p>
            </div>
          </a>
        </section>
      </section>
    );
  }
}

export default ContentTimeline;