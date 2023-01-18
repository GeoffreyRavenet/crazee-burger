import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from 'react-icons/io5';
import { BsPersonCircle } from 'react-icons/bs'
import Input from "../../reusable-ui/TextInput";

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
        <Input value={name} onChange={handleChange} placeholder="Entrer votre prénom" required Icon={<BsPersonCircle className="icon"/>} />

        <button className="button-with-icon">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon"/>
        </button>
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

  .button-with-icon{
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
    white-space: nowrap; //prevents the text label from wrapping to the next line.
    text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
    
    .icon{
      padding-top: 2px;
    }
    
    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`