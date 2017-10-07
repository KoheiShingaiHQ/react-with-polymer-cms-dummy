import React, { Component } from 'react';
import Content from '../container/Content.js';

class ContentsFull extends Component {
  render() {
    return (
      <section id="contents-full">
        <ul>{contents}</ul>
      </section>
    );
  }
}

var contents = [];
var data = [
  {main: "Article 1", sub: 'Something about this article 1'},
  {main: "Article 2", sub: 'Something about this article 2'},
  {main: "Article 3", sub: 'Something about this article 3'},
];
for(var i in data){
  contents.push(
    <li key={data[i].main}>
      <div>
        <Content full_main={data[i].main} full_sub={data[i].sub}></Content>
        <div></div>
      </div>
    </li>  
  );
}

export default ContentsFull;