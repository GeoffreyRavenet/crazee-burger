import styled from 'styled-components';
import { theme } from '../../theme/index.js';

export default function TextInput({value, onChange,Icon, ...other }) {
  return (
    <TextInputStyled>
        {Icon && Icon}
        <input type="text" value={value} onChange={onChange} {...other}/>
    </TextInputStyled>
  )
}
const TextInputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon{
      color: ${theme.colors.greySemiDark};
      font-size: ${theme.fonts.P0};
      margin-right: 8px;
    }
    input{
      border: none;
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.dark};
      width: 100%;
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
`;
