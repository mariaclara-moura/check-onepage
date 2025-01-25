import styled from "styled-components"
import { Cama } from 'assets';


export const Foto = styled.section`
    width: 100%;
    height: 35rem;
    background-image: url(${Cama.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    @media (max-width: 1024px) {
        justify-content: center; 
        height: auto; }
    `;
 
export const ContentBox = styled.div`
    width: 28rem;
    height: auto;
    border-radius: 0.5rem;
    background: #FFF;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: flex-start;
    padding: 3rem 2rem;
    margin: 6rem;
    gap: 1rem;
    @media (max-width: 1024px) {
        width: 20rem;
        height: 20rem;
        object-fit: contain;
        margin: 2rem;
        gap: 0.5rem;
    }    
    h1 {
    color: #000;
    font-family: Montserrat;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: -0.05569rem;
    text-align: left;
    padding-right: 3rem;
    @media (max-width: 1024px) {
        font-size: 1.8rem;
        line-height: 1.8rem;
        padding-right: 0;
    } 
    }
    p {
        color: #2C2C2C;
        font-family: Montserrat;
        font-size: 1.05rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2rem; 
        text-align: left ;
        padding-right:1.5rem;

        @media (max-width: 1024px) {
        font-size: 0.9rem;
        line-height: 1.8rem;
        padding-right:0;

    } 
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    button {
    width: auto;
    padding: 0.7rem 0.5rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    color: #F5F5F7;
    text-align: center;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    margin-top: 0.5rem;
    @media (max-width: 1024px) {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
        margin-top: 0;
    } 
}
    .primary {
        background: #00B2A0;
        border: 2px solid #00B2A0; 
    }

    .secondary {
    background-color: transparent;
    color: #00B2A0;
    border: 2px solid #00B2A0; 
    
   }
    button:hover {
    opacity: 0.9;
    }
`;
