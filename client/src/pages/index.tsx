import React from "react";
import { NavBar,Products, Inicio, Services, Footer, Avaliacao, Somos, Cta, Benefits} from "components";

import styled from "styled-components";

 const HomeContainer = styled.div`
  background-color:#FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export default function Home() {
  return (
    <HomeContainer>
      <NavBar />
      <Inicio />
      <Cta />
      <Somos />
      <Services />
      <Benefits />
      <Products />
      <Avaliacao />
      {/* <h1>Check360 One-page</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by Cla 
      </p> */}
      <Footer />
    </HomeContainer>
  );
}
