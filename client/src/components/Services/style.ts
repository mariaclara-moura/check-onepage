import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
display:flex;
width: 80%;
background: #F5F5F7;
flex-direction: column;
gap: 1rem;
justify-content: space-between;
margin: 5rem;

@media (max-width: 1024px) {
padding: 1rem;
}

`;

export const Card = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
height: 19em;

@media (max-width: 1024px) {
flex-direction: column;
height: auto;
justify-content: center;
margin-top: 1rem;
 }
`;

export const Title = styled.h2`
color: #000;
font-family: Montserrat;
font-size: 1.9rem;
font-style: normal;
font-weight: 700;
line-height: 2.96rem; /* 118.4% */
letter-spacing: -0.05569rem;
@media (max-width: 1024px) {
  text-align: center !important;
  padding-top: 1rem;
 }
`;

export const Description = styled.p`
color: #000;
font-family: sans-serif;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.8rem; /* 177.778% */
padding: 1rem 0;
 @media (max-width: 1024px) {
  text-align: center !important;
  padding: 0.5rem;
 }
`;

export const AppImage = styled(Image)`
  width: 60%;
  height: auto;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 70%;
  align-self: center;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-self: center;
padding: 2rem;
@media (max-width: 1024px) {
  padding: 0.5rem;
  width: 90%;
 }
`;

