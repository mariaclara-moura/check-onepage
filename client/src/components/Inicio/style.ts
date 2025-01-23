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
    width: 32rem;
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
    gap: 1.5rem;
    @media (max-width: 1024px) {
        margin: 1rem;
    }    
// MARK: fazer responsividade!
    h1 {
    color: #000;
    font-family: Montserrat;
    font-size: 1.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    letter-spacing: -0.05569rem;
    text-align: left ;
    }
    p {
        color: #2C2C2C;
        font-family: Montserrat;
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2rem; 
        text-align: left ;
    }
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
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;    }

    .primary {
        background: #00B2A0;
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
