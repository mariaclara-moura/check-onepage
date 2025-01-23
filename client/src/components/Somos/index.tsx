import React from "react";
import {
  Container,
  Title,
  TextSection,
  IphoneImg,
  WhiteBg,
  ButtonGroup
} from "./style";
import Image from "next/image";
import { Mulher, Iphone, Stars } from '../../assets';

export default function Somos() {
  return (
     <WhiteBg>
     <Container id="Somos">
       <TextSection>
         <Title>A Check é a resposta definitiva para quem busca ótimas notas nas plataformas de hospedagem. </Title>
       </TextSection>
       <IphoneImg src={Iphone} alt='Celular com o app Check360' />
        <ButtonGroup>
                 <button className="secondary">Entrar em contato</button>
        </ButtonGroup>
     </Container>
     </WhiteBg>
   );
}
