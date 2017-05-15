import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box.js'
import ProductBox from './components/product-box.js'
import NavBar from'./components/nav-bar.js'
// import Carousel from './components/carousel.js'

import { Button, Alert, Carousel } from 'react-bootstrap';
import{hashHistory, Router, Route, Redirect} from 'react-router';

import BlogPage from './pages/blog'
import PicturePage from './pages/picture'
import VideoPage from './pages/video'

// const routes = (
//   <Router history={hashHistory}>
//     <Redirect from="/" to="/blog" />
//     <Route path="/" component={NavBar}>
//       <Route path="blog" component={BlogPage} />
//       <Route path="picture" component={PicturePage} />
//       <Route path="video" component={VideoPage} />
//     </Route>
//   </Router>
// )

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
  );
})

jQuery(function() {
  ReactDOM.render(
    <ProductBox />,
    document.getElementById('product-box')
  );
})

jQuery(function() {
  ReactDOM.render(
    <NavBar />,
    document.getElementById('nav-bar')
  );
})

jQuery(function() {
  ReactDOM.render(
    <Carousel />,
    document.getElementById('carousel')
  );
})
