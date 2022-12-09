import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logoPng from '../Images/DND-Logo.png';

const Cabecalho = () => {


  return (
    <Content>
      <NavLink to='/'>
        <img src={logoPng} alt='DND' />
      </NavLink>

      <span>
        <NavLink className='btns' to="/login">Login</NavLink>
        <NavLink className="btns" to="/register">Cadastro</NavLink>
      </span>

    </Content >
  );
};


export default Cabecalho;

const Content = styled.header`
  display: flex;
  backdrop-filter: blur(3px);
  position: relative;

  justify-content: space-between;

  @media screen and (max-width: 450px) {
    justify-content: center;
  }


  align-items: center;
  padding: 1rem;
  box-shadow: 0 0 20px 0 #191919;
  flex-wrap: wrap;
  
  a {
  font-size: 1.5em;
  display: flex;
  align-items: center;
  }

  img {
    height: 8rem;
    margin-bottom: 1rem;
    cursor: pointer;    
  }

  span {
    display: flex;
  };

  span a {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px 1px #191919;
    background-color: rgb(48, 41, 98);
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
  .btns.active {
    background-color: #180052;    
  }
  .active {
    filter: drop-shadow(5px 7px 12px #180052);
  }

`;