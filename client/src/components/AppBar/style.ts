import styled from 'styled-components';

interface Props {
  toggle: boolean;
}

export const ContainerNav = styled.nav`
  width: 100%;
  height: 5rem;
  align-items: center;
  box-shadow: 0px 0px 20.5px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #115D6E;
  padding: 0rem 10rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;

export const List = styled.ul<Props>`
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 2.5rem;
  list-style-type: none;
  margin: 0;

  li {
    color: #FFF;
    font-family: Epilogue;
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; 
    cursor: pointer;
    list-style: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #00B2A0;
    }
  }

  @media screen and (max-width: 1024px) {
    background-color: #fff;
    width: 70%;
    display: ${({ toggle }) => (toggle === true ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem;
    padding-top: 2.5rem;
    position: absolute;
    top:5rem;
    right: 0;

    li {
      margin-bottom: 0.5rem;
      color: #115D6E;
      font-size: 1.5rem;
    }
  }
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;