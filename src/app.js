import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box.js'
import ProductBox from './components/product-box.js'
import NavBar from'./components/nav-bar.js'
//import Gallery from './components/gallery.js'
//import { Button, Alert, Carousel } from 'react-bootstrap';

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav-bar')
);

ReactDOM.render(
  <CommentBox />,
  document.getElementById('comment-box')
);

/*
ReactDOM.render(
  <Gallery />,
  document.getElementById('carousel')
);
*/
