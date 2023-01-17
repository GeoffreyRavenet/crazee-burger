import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

function LoginPage() {
  //state {etat, données}
  //comportements
  //affichage (render)
  return ( 
    
    <LoginPageStyled>
      <Logo/>
      <LoginForm/>
    </LoginPageStyled>
  );
}

export default LoginPage;

const LoginPageStyled = styled.div` 
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(${require(`../../../assets/burger-background.jpg`)}) center center / cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.white};
  font-family: 'Amatic SC', cursive;
`;