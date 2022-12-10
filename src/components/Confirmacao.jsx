import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import confirmImg from '../Images/ok-svgrepo-com.svg';

const Confirmacao = () => {
  return (
    <Content>
      <span>
        <img src={confirmImg} alt="" />

        <h3>
          Pronto, ja salvamos seus dados. Clique no botão abaixo para ser
          redirecionado para a tela de login.
        </h3>

        <NavLink to="/login">
          <h2>OK</h2>
        </NavLink>

      </span>
    </Content>
  );
};

export default Confirmacao;

const Content = styled.div`
  position: fixed;
  top:0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  

  span {
    background-color: #464646;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    box-shadow: 0 0 20px 5px #191919;
    max-width: 70%;

  }

  span img {
    margin-bottom: 2rem;
  }

  span h3 {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
  }

  span a {
    font-family: sans-serif;
    background-color: #4caf50 ;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccff90;
    text-decoration: none;
    width: 40%;
    height: 40px;
    margin-top: 2rem;
  }

`;