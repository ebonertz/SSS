import React, {Component} from 'react';
import CommentBox from '../components/comment-box';
import ProductBox from '../components/product-box';

export default class About extends Component {
  render() {
    return (
      <div className="article-body">
        <p>
          This newly renovated condo located near downtown Chapel Hill is an ideal destination for a few nights or few months.
          Walking distance from restaurant, bars, trails and public transportation you will have access to all of what Chapel Hill has to offer.
          Inside you will find a unique North Carolina Tar Heel themed decor, two furnished bedrooms and one and half bathrooms.
          The home features a eco-conscious design with sky lights, led bulbs, and energy efficient appliances. U-verse high speed internet and television are included as well.
        </p>
      </div>
    )
  }
}
