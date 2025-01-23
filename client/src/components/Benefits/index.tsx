import React from "react";
import {
  Container,
  Title,
  Destaque,
  Section,
  Organize, 
} from "./style";
import Image from "next/image";
import {Telas, AppStoreBlack, PlayStoreBlack} from '../../assets';


export default function Benefits() {
  return (
    <Container id="Beneficios">
      <Image src={Telas} alt="Beneficios" />
      <Organize>
      <Title>
        Entre em <Destaque>Contato</Destaque>
      </Title>
      <Section>
        <Image src={AppStoreBlack} alt="AppStore" />
        <Image src={PlayStoreBlack} alt="PlayStore" />
      </Section>
      </Organize>
    </Container>
  );
}
