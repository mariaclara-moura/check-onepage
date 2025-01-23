import React from "react";
import Slider from "react-slick";
import { Container, Title, StyledSlider } from "./style";
import ReviewCard from "../ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Avaliacao() {
  const settings = {
    infinite: true,           
    speed: 500,               
    slidesToShow: 1,         
    slidesToScroll: 1,        
  };

  return (
    <Container id="Avaliacao">
      <Title>Avaliações</Title>
      <StyledSlider>
        <Slider {...settings}>
        <ReviewCard 
          name="Ana Maria Gonzaga" 
          date="02/01/2025" 
          title="Serviço excepcional" 
          text="Minha experiência com a check foi incrível, achei o app super simples de usar, e meus hóspedes amaram a recepção." 
        />
        <ReviewCard 
          name="Ana Maria Gonzaga" 
          date="02/01/2025" 
          title="Serviço excepcional" 
          text="Minha experiência com a check foi incrível, achei o app super simples de usar, e meus hóspedes amaram a recepção." 
        />
        <ReviewCard 
          name="Ana Maria Gonzaga" 
          date="02/01/2025" 
          title="Serviço excepcional" 
          text="Minha experiência com a check foi incrível, achei o app super simples de usar, e meus hóspedes amaram a recepção." 
        />
        </Slider>
      </StyledSlider>
    </Container>
  );
}
