import styled, { css } from "styled-components"
import { theme } from "../../theme/index.js"

export default function Button({ label, Icon, className, onClick, version = "normal" }) {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  line-height: 1;
  cursor: pointer;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  font-family: "Arial";
  font-style: normal;
  font-size: ${theme.fonts.size.XS};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ version }) => version === "normal" && normal}
  ${({ version }) => version === "medium" && medium}
  ${({ version }) => version === "large" && large}
  ${({ version }) => version === "form" && form}
`

const normal = css`
  width: 95px;
  padding: 12px 0;
`

const large = css`
  width: 400px;
  font-size: ${theme.fonts.size.SM};
  line-height: ${theme.fonts.size.SM};
`

const medium = css`
  width: 224px;
  padding: 19px 0;
`

const form = css`
  width: 275px;
  height: 34px;
  padding: 0;
  background: #60bd4f;
  border: 1px solid #60bd4f;
  color: #ffffff;
  :hover {
    background: #fff;
    color: #60bd4f;
    border: 1px solid #60bd4f;
  }
  :active {
    background: #60bd4f;
    color: #fff;
    border: 1px solid #60bd4f;
  }
`

/*

 button {
      cursor: pointer;
      width: 275px;
      height: 34px;
      background: #60bd4f;
      border: 1px solid #60bd4f;
      border-radius: 5px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      text-align: center;

      color: #ffffff;
      :active {
        background: #fff;
        color: #60bd4f;
      }
    }
*/
