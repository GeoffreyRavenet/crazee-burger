import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import Logo from "../../reusable-ui/Logo"
import LoginForm from "./LoginForm"

function LoginPage() {
  //state {etat, données}
  //comportements
  //affichage (render)
  return (
    <LoginPageStyled>
      <Logo className="logo-login" />
      <LoginForm />
    </LoginPageStyled>
  )
}

export default LoginPage

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.white};
  font-family: "Amatic SC", cursive;

  ::before {
    content: "";
    background: url("/images/burger-background.jpg"), rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .logo-login {
    transform: scale(2.5);
  }
`
