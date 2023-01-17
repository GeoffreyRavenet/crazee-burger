import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoIosArrowForward } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs'

function LoginForm() {
  //state (etat, données)
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setName("")
    navigate(`/order/${name}`)
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }
  
  //affichage (render)
  return ( 
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr/>
          <h2>Connectez-vous</h2>
        </div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
          <input type="text" value={name} onChange={handleChange} placeholder="Entrer votre prénom" required/>
        </div>
        <button>Accéder à mon espace<IoIosArrowForward/></button>
      </LoginFormStyled>
  );
}

export default LoginForm;

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1{
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  hr{
    background-color: ${theme.colors.primary_burger};
    border: 1.5px solid ${theme.colors.primary_burger};
    border-radius: 5px;
    margin-bottom: 40px;
  }

  h2{
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.P4};
  }

  .input-with-icon{
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
      color: ${theme.colors.greySemiDark};
      font-size: ${theme.fonts.P0};
      margin-right: 8px;
    }
    input{
      border: none;
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.dark};
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
  }
  
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    width: 503px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P1};
    font-family: 'Open Sans';
    background-color: ${theme.colors.primary_burger};
    padding: 10px 22px;
    border-radius: 5px;
    border: 1px solid transparent;
    & > svg {
      margin-left: 8px;
      font-size: 20px;
      margin-top: 2px;
    }
  }
  button:hover{
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 3px solid ${theme.colors.primary_burger};
    transition: transform .3s;
    & > svg {
      transform: translateX(3px);
    }
  }
`