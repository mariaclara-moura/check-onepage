import React from "react";
import {
  Container,
  Title,
  TextSection,
  Highlight,
  IphoneImg,
  AppImage,
  First
} from "./style";
import Image from "next/image";
import { Mulher, Iphone, Stars } from '../../assets';


export default function Cta() {

  return (
    <Container id="Cta">
    <First >
      <AppImage src={Mulher} alt='Mulher usando o celular' />
      <TextSection>
        <Title>Gerencie a limpeza dos seus imóveis de forma <Highlight>simples</Highlight> e <Highlight>prática</Highlight>, diretamente do seu celular, de onde estiver.</Title>
      </TextSection>
     </First>
      <IphoneImg src={Iphone} alt='Celular com o app Check360' />
    </Container>
  );
}
