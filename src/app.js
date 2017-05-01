import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box.js'
import ProductBox from './components/product-box.js'


jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
    // function() {
    //   console.timeEnd('react-app')
    // }
  );
})

jQuery(function() {
  ReactDOM.render(
    <ProductBox />,
    document.getElementById('product-box')
    // function() {
    //   console.timeEnd('react-app')
    // }
  );
})
