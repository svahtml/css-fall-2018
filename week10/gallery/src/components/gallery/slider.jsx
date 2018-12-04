import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import "./styles.css"

class Slider extends Component {
  static defaultProps = {
    photos: []
  }
  render() {
    const {
      photos
    } = this.props;
    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      spaceBetween: 30,
      renderPrevButton: () => <button className="swiper-button-prev prev" />,
      renderNextButton: () => <button className="swiper-button-next next" />
    };
    return (
      <Swiper {...params}>
        {photos.map((photo) => (
          <div className="Gallery" key={photo.url}>
            <img src={photo.url} alt=""/>
            <div className="info">
              <h2>{photo.title}</h2>
              <p>{photo.description} -- {photo.credit}</p>
            </div>
          </div>
        ))}
      </Swiper>
    );
  }
}

export default Slider;