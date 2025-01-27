import styled from 'styled-components'; 

export const PlansContainer = styled.div`
  width: 80%;
  height:36rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  @media (max-width: 768px) {
    gap:1rem;
  }

`;

export const Title = styled.h2`
  color: #0D1714;
  font-family: Epilogue;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  line-height: 2.5rem;
`;

export const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  align-self: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin-top: 0;
    width: 95%;
  }
`;

export const TableRow = styled.tr`
  height: 5rem;
  border-bottom: 0.1rem solid #768E8C;
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 0.9rem;
  color: #2C2C2C;
  font-family: Epilogue;
  font-size: 1rem;
  font-weight: 500;
  line-height: 2rem;
  
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 1rem ;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem ;
  }
`;

export const Bullet = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: inline-block;
  margin-right: 1rem;
`;

export const CheckIcon = styled.span`
  font-family: Montserrat;
  font-size: 1.75rem;
  color: #115D6E;
  @media (max-width: 768px) {
    font-size:1.5rem;
  }
  

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 90%;
    gap: 2rem;
    justify-content: flex-end;

    button {
    padding: 0.2rem 1rem;
    border-radius: 0.75rem;
    cursor: default;
    color: #F5F5F7;
    text-align: center;
    font-family: Montserrat;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    }
    .secondary {
    background-color: #fff;
    color: #00B2A0;
    border: 0.12rem solid #00B2A0; 
    @media (max-width: 500px) {
      border: none;
      }
   }
    button:hover {
    opacity: 0.9;
    }
    @media (max-width: 1024px) {
      align-self: center;
      padding: 0rem;
      gap: 0.1rem;
      button {
      padding: 0.6rem;
      font-size: 0.8rem;
      }
    }
    @media (min-width: 1500px) {
        gap: 2.2rem;
        width: 88%;
        }
    //885-760-570
    @media (max-width: 500px) {
      align-self: center ;
      gap: 1%;
      margin-left: 4rem;
      
      button {
      padding: 0.1rem;
      font-size: 0.7rem;
        }
  }
`;
