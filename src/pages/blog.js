import React from 'react';
import CommentBox from '../components/comment-box';
import ProductBox from '../components/product-box';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <ProductBox />
        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
