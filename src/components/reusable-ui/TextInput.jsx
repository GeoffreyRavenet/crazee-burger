import styled, { css } from "styled-components"
import { theme } from "../../theme/index"

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...other
}) {
  return (
    <TextInputStyled className={className} version={version}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...other} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 0;
  }
  input {
    border: none;
    width: 100%;
    outline: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  ${({ version }) => version === "normalgray" && normalgray};
  ${({ version }) => version === "normal" && normal};
`
const normal = css`
  background-color: ${theme.colors.white};
  .icon {
    margin: 0 13px 0 12px;
  }
`
const normalgray = css`
  background-color: #f5f5f7;
  input {
    background-color: #f5f5f7;
    ::placeholder {
      background-color: #f5f5f7;
    }
  }
`
