import React, {Component} from 'react';
import CommentBox from '../components/comment-box';
import ProductBox from '../components/product-box';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Home</h1>
        <img src="https://a0.muscache.com/im/pictures/15443339/4df2e054_original.jpg?aki_policy=large" width="300px"/>
      </div>
    )
  }
}
