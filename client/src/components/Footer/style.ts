import styled from 'styled-components';
import Image from 'next/image';

export const FooterContainer = styled.footer`
  background: #052228;
  padding: 2.6rem 10rem 2rem 10rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  width: 100%;
    @media (max-width: 768px){ 
        display: block;
        text-align: center;
    }
  `;

interface FooterDivProps {
  alignRight?: boolean;
} 

export const FooterDiv = styled.div<FooterDivProps>`
  display: flex;
  margin-top:2%;
  justify-content: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  align-items: ${(props) => (props.alignRight ? 'flex-end' : 'flex-start')};
  text-align: ${(props) => (props.alignRight ? 'right' : 'left')};
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px){ 
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: ${(props) => (props.alignRight ? 'column-reverse' : 'column')};
    gap: 0.5rem;
    }
`;

export const TextFooter = styled.p`
color: #CACACA;
font-family: Epilogue;
font-size: 0.8rem;
font-style: normal;
font-weight: 500;
line-height: 1.2rem;
`;

export const FooterDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  @media (max-width: 768px){ 
    gap: 0rem;  
  }
`;

export const AppImage = styled(Image)`
  width: 80%;
  height: auto;
  margin-right: -20%;
  @media (max-width: 768px){ 
        margin-right: 0;
    }
`;

export const SocialImage = styled(Image)`
  width: 80%;  
  height: auto;  
  margin-left: -20%;
`;
