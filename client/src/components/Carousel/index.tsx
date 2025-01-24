import React from 'react';
import Slider from 'react-slick';
import {CarouselContainer, AppImage} from './style';
import Image from 'next/image';
import {Limpeza1, Limpeza2, Limpeza3, Limpeza4} from '../../assets';

const ImageCarousel = () => {
  // Configurações do slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
          <AppImage src={Limpeza1} alt="Limpeza 1" />
          <AppImage src={Limpeza2} alt="Limpeza 2" />
          <AppImage src={Limpeza3} alt="Limpeza 3" />
          <AppImage src={Limpeza4} alt="Limpeza 4" />
      </Slider>
    </CarouselContainer>
  );
};

export default ImageCarousel;
