import React from "react";
import {
  Container,
  Title,
  TextSection,
  Highlight,
  IphoneImg,
  AppImage,
} from "./style";
import Image from "next/image";
import { Mulher, Iphone, Stars } from '../../assets';


export default function Cta() {

  return (
    <Container id="Cta">
    <div style={{display: 'flex', gap: '0'}}>
      <AppImage src={Mulher} alt='Mulher usando o celular' />
      <TextSection>
        <Title>Gerencie a limpeza <br></br> dos seus imóveis de <br></br> forma <Highlight>simples</Highlight> e <br></br> <Highlight>prática</Highlight>, diretamente <br></br> do seu celular, de <br></br> onde estiver.</Title>
      </TextSection>
     </div>
      <IphoneImg src={Iphone} alt='Celular com o app Check360' />
    </Container>
  );
}
