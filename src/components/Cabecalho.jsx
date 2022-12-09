import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/DND-Logo.png';


const Content = styled.header`
  display: flex;
  backdrop-filter: blur(3px);

  justify-content: space-between;

  @media screen and (max-width: 450px) {
    justify-content: center;
  }


  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 20px 0 #191919;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  a {
  font-size: 1.5em;
  display: flex;
  align-items: center;
  }

  img {
    height: 8rem;
    margin-bottom: 1rem;
  }

  span {
    display: flex;
  };

  span a {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px 1px #191919;
    background-color: #302962;
    width: 8rem;
    height: 3rem;
    margin-left: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: #ffff;
    &:hover {
      background-color: #3200a7;
      color: #ffff;
    }
  }  
`;

const Cabecalho = () => {
  return (
    <Content>
      <NavLink to='/home'>
        <img src={logo} alt="D20" />
      </NavLink>

      <span>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cadastro">Cadastro</NavLink>
      </span>
    </Content>
  );
};

export default Cabecalho;