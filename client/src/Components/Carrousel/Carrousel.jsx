import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import oferta2 from "../../Imgs/logo-no-background.png"
import ofertGrocery from "../../Imgs/Ofert-grocery.png"
import ofertPet from"../../Imgs/Ofert-Pet.png"
import ofertLapto from"../../Imgs/Ofert-Lapto.png"
import oferthead from"../../Imgs/Ofert-head.png"
import oferProducts from "../../Imgs/Ofert-products.jpg"

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };

  return (
    <div className="carrousel">
   
      <Slider {...settings}>
        <div>
          <img src={ofertPet} alt="" />
        </div>
        <div>
          <img src={ofertGrocery} alt=""/>
        </div>
        <div>
          <img src={ofertLapto} alt="" />
        </div>
        <div>
          <img src={oferthead} alt="" />
        </div>
        <div>
          <img src={oferProducts} alt="" />
        </div>
        <div>
          <img src={oferta2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;