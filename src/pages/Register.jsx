import React from 'react';
import styled from 'styled-components';

import Cabecalho from '../components/Cabecalho';

const Register = () => {
  return (
    <>
      <Cabecalho />

      <Content>
        <form>
          <h1>Register</h1>

          <section>
            <input type="text" required placeholder='Nome*' />
            <input type="text" required placeholder='Sobrenome*' />
          </section>

          <section>
            <input type="text" required placeholder='Username*' />
            <input type="email" required placeholder='Email*' />
          </section>

          <input type="password" required placeholder='Senha*' />

          <button type='submit'>Registrar</button>
        </form>
      </Content>
    </>
  );
};

export default Register;

const Content = styled.div`

  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 5;
    }
  }

  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-weight: bold;

  h1 {
    text-shadow: 1px 1px 5px #838383;
  }
  
  form {
    backdrop-filter: blur(3px);
    box-shadow: 0 0 20px 5px #191919;
    border-radius: 10px;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;    
    height: 100%;
    font-size: 1.7rem;

  
  }

  form button {
    font-family: 'Roboto', sans-serif;
    background-color: #6128bd;
    color: #ffff;
    text-shadow: 1px 1px 5px #191919;
    border: none;
    border-radius: 50px;
    width: 48%;
    height: 4.8rem;
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 2px 1px 10px 2.5px #191919;
  }

  input {
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    width: 15vw;
    font-size: 1rem;
    font-size: 1.5rem;
    height: 5vh;
    padding: 8px;
    background: none;
    border: none;
    border-bottom: 2px solid #191919;
    text-shadow: 1px 2px 10px #686868;
    border-radius: 10px;
    margin: 0 1.5rem;
    
  };
  
  
  input:focus {
    outline: none;
    /* background-color: rgba(201, 201, 201, 0.5); */
    border-radius: 10px;
    caret-color: #00eeff;

  }

  input::placeholder {
    color: #6128bd;
    font-size: 1.5rem;
    text-shadow: 1px 1px 5px #686868;
  }


`;