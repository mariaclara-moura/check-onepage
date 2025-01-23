import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
display:flex;
width: 80%;
background: #F5F5F7;
flex-direction: column;
gap: 1rem;
justify-content: space-between;
margin: 5rem 0;
`;

export const Card = styled.div`
display: flex;
justify-content: space-between;
text-align: center;

@media (max-width: 1024px) {
flex-direction: column;
 }
`;

export const Title = styled.h2`
color: #000;
font-family: Montserrat;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 2.96rem; /* 118.4% */
letter-spacing: -0.05569rem;
`;

export const Description = styled.p`
color: #000;
font-family: sans-serif;
font-size: 0.9rem;
font-style: normal;
font-weight: 400;
line-height: 1.8rem; /* 177.778% */
padding: 1rem 0;
`;

export const AppImage = styled(Image)`
  width: 60%;
  height: auto;
`;


