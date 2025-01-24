import React from "react";
import {
  Container,
  Title,
  TextSection,
  Description
} from "./style";
import Image from "next/image";
import ImageCarousel from '../Carousel';


export default function Somos() {
  return (
     <Container id="Somos">
       <TextSection>
         <Title>A Check é a resposta definitiva para quem busca ótimas notas nas plataformas de hospedagem. </Title>
         <Description>Escolha seu plano, selecione seu imóvel. O <br></br> elogio do hóspede é por nossa conta!</Description>
         <a href="mailto:aaa@gmail.com">
                 <button className="secondary">Entrar em contato</button>
                </a>
       </TextSection>
       <ImageCarousel />
     </Container>
   );
}
