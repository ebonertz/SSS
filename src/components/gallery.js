import React, { Component } from 'react';
import { Button, Alert, Carousel, Caption, Item } from 'react-bootstrap';

export default class Gallery extends Component{

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="./../assets/bells.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Big</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="../assets/bells.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Dog</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="../assets/bells.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Status</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
  }
}
