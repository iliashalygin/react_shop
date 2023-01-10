import React, { Component, useState } from "react";
import s from "./Slider.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "./img/slide1.svg"
import slide2 from "./img/slide2.svg"
import slide3 from "./img/slide3.svg"
import slide4 from "./img/slide4.svg"
import slide5 from "./img/slide5.svg"
import slide6 from "./img/slide6.svg"
export default class Resizable extends Component {
  state = {
    display: true,
    width: 850,
    height: 660,

  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings} className={s.slider}>
            <div>
              <img src={slide1} />
            </div>
            <div>
              <img src={slide2} />
            </div>
            <div>
              <img src={slide3} />
            </div>
            <div>
              <img src={slide4} />
            </div>
            <div>
              <img src={slide5} />
            </div>
            <div>
              <img src={slide6} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}