import React from "react";
import {
  Foto,
  ContentBox,
  ButtonGroup,
} from "./style";
import { Link as ScrollLink } from 'react-scroll'; 

export default function Inicio() {
  return (
    <Foto>
      <ContentBox  id="Inicio">
        <h1>A gente encanta, você recebe o elogio.</h1>
        <p>
          A solução completa de limpeza do seu imóvel de praia. Mais
          praticidade, menos complicações.
        </p>
        <ButtonGroup>
        <ScrollLink
              to={'Beneficios'}
              smooth={true}
              duration={500}
              spy={true}
            >
          <button className="primary">Começar agora</button>
          </ScrollLink>
          <ScrollLink
              to={'Services'}
              smooth={true}
              duration={500}
              spy={true}
            >
          <button className="secondary">Explorar funcionalidades</button>
          </ScrollLink>
        </ButtonGroup>
      </ContentBox>
    </Foto>
  );
}


