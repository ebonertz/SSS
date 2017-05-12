import React, {Component} from 'react';
import CommentBox from '../components/comment-box';
import ProductBox from '../components/product-box';

export default class BlogPage extends Component {
  render() {
    return (
      <div>
        <ProductBox />
        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
