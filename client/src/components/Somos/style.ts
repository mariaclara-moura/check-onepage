import styled from "styled-components";
import Image from "next/image";
import { Stars } from 'assets';


 export const WhiteBg = styled.div`
   width:100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: pink;

//   @media (max-width: 1024px) {
//     height: 770px;
//   }

//   @media (min-width: 1550px) {
//   height: 520px;
//  }
//  @media (min-width: 2000px) {
//     height: 600px;
// }
//   @media (max-width: 768px) {
//     display: block;
//     padding-left: 2%;
//     padding-right: 2%;
//     padding-top: 6%;
//     height: 800px;
//   }
`; 

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2;
  justify-content: space-around;
  align-items: center;
  background: #EBF8F4;
  width: 80%;
  padding: 1.5rem;
  gap: 0;
  `;

export const TextSection = styled.div`
width: 25rem;
height: auto;
flex-shrink: 0;
background-image: url(${Stars.src});
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-wrap: wrap;

`;

export const Title = styled.h1`
color: #F5F5F7;
font-family: Arial;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2.6rem; /* 148% */
letter-spacing: -0.05569rem;
`;

export const IphoneImg = styled(Image)`
    width: 12.5rem;
    height: auto;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    button {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    color: #F5F5F7;
    text-align: center;
    font-family: Montserrat;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;    }

    .primary {
        background: #00B2A0;
    }

    .secondary {
    background-color: #fff;
    color: #00B2A0;
    border: 2px solid #00B2A0; 
   }
    button:hover {
    opacity: 0.9;
    }
`;
