import styled from "styled-components";
import { Familia } from 'assets';


export const Container = styled.div`
    width: 100%;
    height: 34rem;
    background-image: url(${Familia.src});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-position: center;
    @media (max-width: 1024px) {
        justify-content: center; 
       }
`;

export const Title = styled.h1`
    color: #0D1714;
    font-family: Epilogue;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    margin: 5rem 0 2rem  7rem;
`;

// MARK: RESPONSIVIDADE!!

export const StyledSlider = styled.div`
  width: 40%;  
  margin-left: 0; 
  align-self: flex-start;
  position: relative;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-prev, .slick-next {
    color: white; 
  }

  .slick-prev {
    left: 5rem; 
  }

  .slick-next {
    right: 5rem;  
  }

`;

