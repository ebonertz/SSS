import React from 'react';
import CommentBox from '../components/comment-box';

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
            <h1 className="article-title">Robots Have Feelings, Too</h1>
            <div className="article-body">
              <p>
                The term “artificial intelligence” has been floating around since the
              </p>
              <blockquote>
                What humans need to understand is that all beings simply want to love
              </blockquote>
              <p>
                To those who believe robot feelings could lead to turmoil
              </p>
            </div>
          </article>
        </div>

        <CommentBox apiUrl="api/blog/comments.json" />
      </div>
    )
  }
}
