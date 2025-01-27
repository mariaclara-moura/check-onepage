import styled from "styled-components";
import { Familia } from 'assets';


export const Container = styled.div`
    width: 100%;
    height: auto;
    min-height: 85vh; 
    background-image: url(${Familia.src});
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
      background-position: left center;
      min-height: 50vh; 
      justify-content:center; 
       }
`;

export const Title = styled.h1`
    color: #0D1714;
    font-family: Epilogue;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    margin: 3rem 0 2rem  6rem;
    @media (max-width: 768px) {
        margin: 0 3rem;
    }
   
`;

export const StyledSlider = styled.div`
  width: 40%;  
  margin-left: 0; 
  align-self: flex-start;
  position: relative;
  @media (max-width: 1024px) {
    width: 50%;
    margin-left: 3rem;
    margin-bottom: 2%;

  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-prev {
    left: 4rem;
    @media (max-width: 1024px) {
    left:-2rem;
  }
  }
  .slick-next {
    right: 4rem;  
    @media (max-width: 1024px) {
    right:-2rem;
  }
  }
`;

