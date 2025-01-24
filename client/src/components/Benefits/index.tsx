import React from "react";
import {
  Container,
  Title,
  Section,
  Organize, 
  AppImage,
  SocialImage,
  SocialImage2,
  List,
  ListItem,
} from "./style";
import Image from "next/image";
import {Telas, AppStoreBlack, PlayStoreBlack} from '../../assets';


export default function Benefits() {
  return (
    <Container id="Beneficios">
      <AppImage src={Telas} alt="Beneficios" />
      <Organize>
      <Title>
      Centralize a gestão da limpeza do seu imóvel e tenha ótimas avaliações nas plataformas.
      </Title>
        <List>
          <ListItem><strong>Simplificação</strong> total da gestão com acompanhamento real do serviço;</ListItem>
          <ListItem>Equipe de bem-estar treinada para extrair o melhor do seu imóvel e <strong>encantar hóspedes</strong>;</ListItem>
          <ListItem><strong>Experiência completa</strong> desde a limpeza até os kits de amenities e boas-vindas;</ListItem>
          <ListItem><strong>Tranquilidade e confiança</strong> do seu investimento estar em mãos competentes.</ListItem>
        </List>
      <Section>
        <SocialImage src={AppStoreBlack} alt="AppStore" />
        <SocialImage2 src={PlayStoreBlack} alt="PlayStore" />
      </Section>
      </Organize>
    </Container>
  );
}
