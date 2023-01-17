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
      <LoginFormStyled onSubmit={handleSubmit}>
        <h1><span>Bienvenue chez nous !</span></h1>
        <h2>Connectez-vous</h2>
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
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span{
    display:block;
  }

  h1{
    margin: 0;
  }
  h1::after{
    content: '';
    display: inline-block;
    width: 370px;
    height: 4px;
    background: ${theme.colors.primary_burger};
    border-radius: 2px;
  }
  h1{
    font-size:3.8rem;
  }
  h2{
    margin: 0;
    font-size: 2.8rem;
    margin-top: 17px;
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