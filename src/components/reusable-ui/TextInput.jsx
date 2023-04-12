import styled from "styled-components"
import { theme } from "../../theme/index.js"

export default function TextInput({ value, onChange, Icon, className, ...other }) {
  return (
    <TextInputStyled className={className && className}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...other} />
    </TextInputStyled>
  )
}
const TextInputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.SM};
    margin-right: 8px;
  }
  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: none;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`
