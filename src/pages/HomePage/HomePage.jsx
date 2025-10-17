import React, { useEffect } from "react";
import Slider from "react-slick";
import {images} from "@/assets/imgs/index.jsx";

function HomePage() {
 const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  const listImagesBanner = [
    images.bannerDoctor,
    images.bannerWeb,
    images.bannerDoctor2,
  ]
  
  return (
    <div>
      <Slider {...settings}>
        {listImagesBanner.map((item, index) => (
          <div key={index}>
            <img src={(item)} alt="banner" />
          </div>
        ))}
      </Slider>
      <div className="container">
        <img src={images.mailisaSeminor} alt="mailisaSeminor" />
      </div>
    </div>
  );
}

export default HomePage;
