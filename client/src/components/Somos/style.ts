import styled from "styled-components";
import Image from "next/image";
import { Arrumacao } from 'assets';

export const Container = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: none;
  width: 80%;
  height: auto;
  gap: 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  `;

export const TextSection = styled.div` 
  background-image: url(${Arrumacao.src}); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  width: 100%; 
  height: 27rem; 
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  padding: 3rem 2.5rem 0 2rem;

  @media (max-width: 1024px) { 
    background-position: bottom left;
    padding: 2rem 1rem 0 1rem;
    gap: 0.8rem;  
    margin: 0;}
  
  button {
    padding: 0.55rem 1.2rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    color: #F5F5F7;
    text-align: center;
    font-family: Montserrat;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;   
  
    @media (max-width: 1024px) {
      font-size: 0.8rem; 
      line-height: 1rem; 
      padding: 0.5rem 1rem;  }
}

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

export const Description = styled.p`
color: #000;
font-family: sans-serif;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem; 
padding: 1rem 0 2rem 0;
@media (max-width: 1024px) {
padding: 0;  }
`;

export const Title = styled.h1`
color: #000;
font-family: Arial;
font-size: 2.3rem;
font-style: normal;
font-weight: 700;
line-height: 2.8rem;
letter-spacing: -0.06rem;
@media (max-width: 1024px) {
 font-size: 1.7rem; 
 line-height: 2rem;}
`;
