import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width:60%;
  margin: 1rem auto;
  height: auto;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  gap: 1rem;
  background: #FFF;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Name = styled.p`
 color: #000;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; 
  letter-spacing: -0.05569rem;
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;
export const Data = styled.p`
 color: #000;
font-family: Montserrat;
font-size: 0.8rem;
font-style: normal;
font-weight: 400;
line-height: 1.8rem; 
letter-spacing: -0.05569rem;
`;

export const Title = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.8rem; 
  letter-spacing: -0.05569rem;
  align-self: stretch;
  @media (max-width: 1100px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Text = styled.p`
  align-self: stretch;
  color: #2C2C2C;
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem; /* 170% */
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;
