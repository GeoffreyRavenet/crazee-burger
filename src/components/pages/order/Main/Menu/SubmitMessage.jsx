import { FiCheck } from "react-icons/fi"
import styled from "styled-components"

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
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #60bd4f;
  .icon-check {
    border: 1px solid #60bd4f;
    border-radius: 50%;
  }
  span {
    font-family: "Open Sans";
    font-style: normal;
    margin-left: 5px;
  }
`
