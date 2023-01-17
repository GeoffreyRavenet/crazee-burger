import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoIosArrowForward } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi'

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
        <div className="inputName">
          <HiUserCircle/>
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

  .inputName{
    position: relative;
    display: flex;
    align-items: center;
    svg{
      position: absolute;
      left: 45px;
      color: ${theme.colors.greyDark};
      width: 25px;
      height: 25px;
    }
    input{
      padding-left: 60px;
      color: ${theme.colors.dark};
      height: 65px;
      width: calc(503px - 60px);
      border-radius: 6px;
      border: 1px solid transparent;
      margin: 25px;
      font-size: ${theme.fonts.P1};
      outline-offset: 0px;
      outline: 0px;
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