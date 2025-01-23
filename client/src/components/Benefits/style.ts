import styled from "styled-components";

export const Container = styled.div`
  background: var(--degrade, linear-gradient(180deg, #1BB7A7 0%, #66FBEC 46%, #A3FFF6 96.5%));
  width: 80%;
  height: 30rem;
  display: flex;

  @media (max-width: 1024px) {
    height: 770px;
  }

  @media (min-width: 1550px) {
  height: 520px;
 }
 @media (min-width: 2000px) {
    height: 600px;
}
  @media (max-width: 768px) {
    display: block;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 6%;
    height: 800px;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-family: Open Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 66.667% */
  text-transform: uppercase;
  margin-top: 1%;
`;

export const Destaque = styled.span`
  color: #333;
  font-family: Open Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
`;

export const Linha = styled.div`
  width: 100%;
  height: 2px;
  flex-shrink: 0;
  background: linear-gradient(90deg, #333 0%, rgba(255, 255, 255, 0) 100%);
  margin-top: 24px;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15%;
  align-items: flex-start;
  @media (max-width: 1024px) and (min-width: 768px) {
    gap: 5%;
    margin-top: 5% !important;
  }
`;

export const Descrição = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    display: block;
    gap: 0px;
    margin-bottom:10%;
    text-align: center;
    align-self: center;
  }
`;
export const Descrição1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
  margin-bottom: 2%;
  margin-right: 5%;

  @media (max-width: 768px) {
    display: block;
    gap: 0px;
    margin-bottom:10%;
    text-align: center;
    align-self: center;
  }
`;

export const Title2 = styled.h2`
  color: #333;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.8px; /* 110% */
`;

export const Text = styled.p`
  color: #333;
  text-align: justify;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 0.92106rem;
  line-height: 1.57894rem;

  @media (max-width: 768px) {
    align-self: center;
  }

`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Organize = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 5%; */

@media (max-width: 1024px) and (min-width: 768px) {
  margin-bottom:3%;
  margin-top:-6%;}
`;
