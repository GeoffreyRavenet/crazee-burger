import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme/index.js"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import Input from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton.jsx"

function LoginForm() {
  //state (etat, données)
  const [name, setName] = useState("")
  const navigate = useNavigate()

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
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <Input
        value={name}
        onChange={handleChange}
        placeholder="Entrer votre prénom"
        required
        Icon={<BsPersonCircle className="icon" />}
      />

      <PrimaryButton label="Accéder à mon espace" Icon={<IoChevronForward className="icon" />} />
    </LoginFormStyled>
  )
}

export default LoginForm

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  hr {
    background-color: ${theme.colors.primary_burger};
    border: 1.5px solid ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.round};
    margin-bottom: 40px;
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.P4};
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
    padding-top: 2px;
  }
`
