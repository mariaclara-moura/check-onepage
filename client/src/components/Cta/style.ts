import styled from "styled-components";
import Image from "next/image";
import { Stars, Stars2 } from 'assets';


export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background: #EBF8F4;
  width: 80%;
  max-width: 80%;
  padding: 1.5rem;
  gap: 0;
  margin: 5rem 0;
  @media (max-width: 1300px) {
    flex-direction: column;
  }  `;

export const TextSection = styled.div`
display: flex;
width: 23rem;
height: auto;
padding: 3.5rem 1.5rem;
flex-shrink: 0;
background-image: url(${Stars.src});
background-repeat: no-repeat;
background-size: contain;
margin-top: 0.8%;
margin-left: -2.5%;
 @media (max-width: 1024px) {
    padding: 2rem;
    width: 15rem;
      }
  @media (max-width: 400px) {
      margin-left: 15%;
      background-image: url(${Stars2.src});

      }
`;

export const Title = styled.h1`
color: #F5F5F7;
font-family: Montserrat;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2.6rem; /* 148% */
letter-spacing: -0.05569rem;
margin-right: 5rem;
@media (max-width: 1024px) {
  width: 80%;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5rem;
   }
`;

export const Highlight = styled.span`
  text-decoration-line: underline;
`;


export const AppImage = styled(Image)`
  width: 26rem;
  height: 25rem;
  @media (max-width: 1024px) {
    width: 50%; 
    height: auto;
    margin-top: 2%;}
  @media (max-width: 400px) {
      width:0; }
`;

export const IphoneImg = styled(Image)`
    width: 12.5rem;
    height: auto;
    @media (max-width: 1300px) {
    height: auto;
    width: 50%; 
    margin-top: 2%;}
`;

export const First = styled.div`
  display: flex;
  gap: 0;
  align-items: flex-start;
  @media (max-width: 1024px) {
    justify-content:center  }
  @media (max-width: 400px) {
      flex-direction: column;
      align-items: center; }
`;