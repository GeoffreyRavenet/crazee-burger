import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import LoginForm from "./LoginForm";

function LoginPage() {
  //state {etat, données}
  const logo = require(`../../../assets/logo-orange.png`);
  //comportements
  //affichage (render)
  return ( 
    
    <LoginPageStyled>
      <div className="logo">
        <Link to={`/`}>
          <span>crazee</span>
          <img src={logo} alt="" />
          <span>burger</span>
        </Link>
      </div>
      <h1><span>Bienvenue chez nous !</span></h1>
      <h2>Connectez-vous</h2>
      <LoginForm/>
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div` 
  text-align: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: url(${require(`../../../assets/burger-background.jpg`)}) center center / cover no-repeat;
  color: ${theme.colors.white};
  font-family: 'Amatic SC', cursive;

  a{
    text-decoration:none;
    font-size: 8rem;
    color: ${theme.colors.primary_burger};
    position: relative;
    display: flex;
    justify-content:center;
  }

  a::before {
    content: '';
    position: absolute;
    width: 65%;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.primary_burger};
    bottom: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .logo{
    padding: 117px 0px 54px;
    font-weight: bold;
  }
  .logo img{
    height: 178px;
    position: relative;
    padding: 0px 16px;
    flex:none;
  }

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
`;