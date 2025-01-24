import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './marcas.css';

var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: false,
    atoplaySpeed: 0,
    centerPadding: "60px",
    pauseOnHover: true,
    slidesToShow: 4,
    speed: 0,
    arrows: false,
    nextArrow: false,
    prevArrow: false,
    responsive: [

      {
          breakpoint: 948,
          settings: {
              slidesToShow: 3,
              speed: 500,
              autoplay: true,
              atoplaySpeed: 500,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1.7,
              speed: 500,
              autoplay: true,
              atoplaySpeed: 500,
          }
      }
  ]
    
}

export const Marcas = () => {

  const marcas = [
    { id: 1, name: "Marca 1", logo: "marca1.png" },
    { id: 2, name: "Marca 2", logo: "marca2.png" },
    { id: 3, name: "Marca 3", logo: "marca3.png" },
    { id: 4, name: "Marca 4", logo: "marca4.png" },
    { id: 5, name: "Marca 5", logo: "marca5.png" },

  ];

  return (
    <div className="sliderContainerMarcas">
      <h2>Nuestras Marcas</h2>
      <Slider {...settings} className="slidesMarcas">
        {marcas.map((marca) => (
          <div key={marca.id} className="marcaCard">
            <img src={marca.logo} alt={marca.name} className="marcaLogo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
