import styled from "styled-components";
import Image from "next/image";

export const CarouselContainer = styled.div`
  width: 40%;
  margin: 0;

  @media (max-width: 1024px) {
    width:100%;
  }

  .slick-prev, .slick-next {
    margin-top: 38%;
    width: 3rem;
    height: 3rem;
    z-index: 10;
    @media (max-width: 1024px) { 
     margin-top: 42%; }
     @media (max-width: 758px) {
    margin-top: 35%;
  } 
  }

  .slick-prev {
    left:22rem;
    @media (max-width: 758px) {
    /* left:1rem */
    left:15rem;
  } 
  @media (max-width: 1024px) {
    /* left:1rem */
    left:28rem;
  }
  @media (max-width: 900px) and (min-width: 800px){
     left:32rem;
  }
  @media (max-width:500px) {
    /* left:1rem */
    left:17rem;
  }
  }
  .slick-next {
    right:0rem;
    @media (max-width: 1024px) and (min-width: 901px)  {
     right:6rem;
  }
  @media (max-width: 900px) and (min-width: 800px) {
     right:8rem;
  }
  }

  .slick-dots {
    bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .slick-dots li {
    width:7rem;
    height: 0.2rem;
    margin: 0;
    background-color: #12191F;
    transition: all 0.3s ease;
    @media (max-width: 758px) { 
      width: 5rem; }
      
  }

  /* Retângulo ativo */
  .slick-dots li.slick-active {
    background: #F5F5F7; 
    width: 5.5rem;

  }

  .slick-dots li button {
    display: none; 
  }
`;


export const AppImage = styled(Image)`
  height: 27rem; 
  width: auto;
  margin-top: 0.9%;
  @media (max-width: 1024px) {
   width: 100%;
   height: auto;
   margin-top: 0; }

`;

