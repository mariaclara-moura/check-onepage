import React from "react";
import { FooterContainer, FooterDiv, FooterDiv2, TextFooter, AppImage, SocialImage} from './style';
import { WhiteIcon, PlayStore, AppStore} from '../../assets';
import Image from 'next/image';

export default function Footer  ()  {
  return (
    <FooterContainer id="Footer">
      <FooterDiv> 
        <AppImage src={WhiteIcon} alt="" />
        <div>
        <a href="https:/www.google.com" target="blank" style={{ textDecoration: 'none' }}>
        <TextFooter>(81) 99999-9999 </TextFooter>
        </a>
        <a href="https:/www.google.com" target="blank" style={{ textDecoration: 'none' }}>
        <TextFooter> contato@check360.com.br </TextFooter>
        </a>
        </div>
      </FooterDiv>
      <FooterDiv alignRight = {true}>
      <FooterDiv2>
       <a href="https://www.google.com" target="blank">
            <AppImage src={AppStore} alt="" />
        </a>
        <a href="https:/www.google.com" target="blank">
            <SocialImage src={PlayStore} alt="" />
        </a>
      </FooterDiv2>
      <TextFooter>CNPJ: 00.000.000/0000-00 | Endereço – Bairro, Cidade-Estado</TextFooter>
      </FooterDiv>
    </FooterContainer>
  );
}