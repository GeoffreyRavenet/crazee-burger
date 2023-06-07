import styled, { css } from "styled-components"
import { theme } from "../../theme/index"
import React from "react"

const TextInput = React.forwardRef(
  ({ value, onChange, Icon, className, type, version = "normal", ...other }, ref) => {
    return (
      <TextInputStyled className={className} version={version}>
        {Icon && Icon}
        <input ref={ref} type={type} value={value} onChange={onChange} {...other} />
      </TextInputStyled>
    )
  }
)
export default TextInput
const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;

  svg {
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
  background-color: ${theme.colors.background_white};
  input {
    background-color: ${theme.colors.background_white};
    ::placeholder {
      background-color: ${theme.colors.background_white};
    }

    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${theme.colors.background_white} inset !important;
    }
  }
`
