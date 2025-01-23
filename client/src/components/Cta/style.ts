import styled from "styled-components";
import Image from "next/image";
import { Stars } from 'assets';


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #EBF8F4;
  width: 80%;
  padding: 1.5rem;
  gap: 0;
  margin: 5rem 0;
  `;

export const TextSection = styled.div`
width: 23rem;
height: auto;
padding: 3.5rem 1.5rem;
flex-shrink: 0;
background-image: url(${Stars.src});
background-repeat: no-repeat;
background-size: contain;
margin-top: 0.8%;
margin-left: -2.5%;
`;

export const Title = styled.h1`
color: #F5F5F7;
font-family: Montserrat;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2.6rem; /* 148% */
letter-spacing: -0.05569rem;
`;

export const Highlight = styled.span`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;


export const AppImage = styled(Image)`
  width: 26rem;
  height: 25rem;
`;

export const IphoneImg = styled(Image)`
    width: 12.5rem;
    height: auto;
`;
