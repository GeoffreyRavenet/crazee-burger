import { FiCheck } from "react-icons/fi"
import styled from "styled-components"
import { theme } from "../../../../../theme/index.js"

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className="submit-message">
      <FiCheck className="icon-check" />
      <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.SM};
  line-height: 20px;
  color: ${theme.colors.success};
  .icon-check {
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.circle};
  }
  span {
    font-family: "Open Sans";
    font-style: normal;
    margin-left: 5px;
  }
`
