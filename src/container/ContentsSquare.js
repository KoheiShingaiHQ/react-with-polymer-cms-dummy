import React, { Component } from 'react';
import ContentLabel from '../container/ContentLabel.js';

class ContentsSquare extends Component {
  constructor(props) {
    super(props);
    this.state = { contents : [] }
  }
  componentDidMount() {
    var contents = [];
    var data = this.props.data;
    for(var i in data){
      contents.push(
        <li key={data[i].main}>
          <a>
            <div>
              <ContentLabel main={data[i].main} sub={data[i].sub}></ContentLabel>
            </div>
          </a>
        </li>
      );
    }
    this.setState({ contents : contents });
  }
  render() {
    return (
      <section id="contents-square">
        <ul>{this.state.contents}</ul>
      </section>
    );
  }
}

export default ContentsSquare;