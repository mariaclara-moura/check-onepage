import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background: var(--degrade, linear-gradient(180deg, #1BB7A7 0%, #66FBEC 46%, #A3FFF6 96.5%));
  width: 80%;
  height: auto;
  display: flex;

  @media (max-width: 1024px) {
  flex-direction: column;
  margin: 3rem 2rem;
 }
`;

export const Title = styled.h1`
  color: #FFF;
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.2rem; /* 134.375% */
`;

export const AppImage = styled(Image)`
  max-height: 80vh;
  max-width: 90%;
  width: auto;
  margin: 1rem 3rem;
  align-self: center;
  @media (max-width: 1024px) { 
width: 90%;
height: auto;
}

`;

export const SocialImage = styled(Image)`
  width: 10vw;  
  height: auto;  
  @media (max-width: 1024px) {
    width: 18vw;
 }
`;

export const SocialImage2 = styled(Image)`
  width: 11vw;  
  height: auto;
  @media (max-width: 1024px) {
width: 19vw; }  
`;

export const List = styled.ul`
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.09);
  padding: 1rem 2rem;
`;

export const ListItem = styled.li`
  color: #0D1714;
  font-family: Montserrat;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5625rem;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    justify-content: center;
  }

`;
export const Organize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:3rem 2.5rem 2rem 0;
  gap:1rem;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
`;
