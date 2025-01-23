import { useState } from 'react';
import { ContainerNav, List, ToggleButton } from './style';
import Image from 'next/image';
import { WhiteIcon } from '../../assets';
import { Link as ScrollLink } from 'react-scroll'; 

export const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  const handleToggle = () => {
    setToggle(!toggle); 
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  const listItem = ['Quem Somos', 'Nossos Serviços', 'App', 'Planos', 'Avaliações', 'Contato'];
  const itemLinks = ['Somos', 'Services', 'Beneficios', 'Products','Avaliacao' ,'Footer'];

  return (
    <ContainerNav>
      <Image src={WhiteIcon} alt="Logo" />
      <ToggleButton onClick={handleToggle}>
        {toggle ? (
          <span style={{ fontSize: '30px' }}>&times;</span>
        ) : (
          <span style={{ fontSize: '24px' }}>&#9776;</span>
        )}
      </ToggleButton>
      <List toggle={toggle}>
        {listItem.map((item, index) => (
          <li key={index} >
            <ScrollLink
              to={itemLinks[index]}
              smooth={true}
              duration={500}
              spy={true}
              onClick={handleLinkClick}
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </List>
    </ContainerNav>
  );
};

export default Navbar;
