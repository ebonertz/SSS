import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import CommentBox from './components/comment-box.js'
import ProductBox from './components/product-box.js'
import NavBar from'./components/nav-bar.js'
//import Gallery from './components/gallery.js'

import { Button, Alert, Carousel } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import BlogPage from './pages/blog'
import PicturePage from './pages/picture'
import VideoPage from './pages/video'


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
