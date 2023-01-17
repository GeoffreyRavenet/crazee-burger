import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { theme } from '../../theme/index.js';

export default function Logo() {   
    return (
        <LogoStyled>
            <Link to={`/`}>
              <span>crazee</span>
              <img src="/images/logo-orange.png" alt="" />
              <span>burger</span>
          </Link>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    font-weight: bold;
  a{
    text-decoration:none;
    font-size: 8rem;
    color: ${theme.colors.primary_burger};
    position: relative;
    display: flex;
    justify-content:center;
  }

  a::before {
    content: '';
    position: absolute;
    width: 650px;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.primary_burger};
    bottom: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  img{
    height: 178px;
    position: relative;
    padding: 0px 16px;
    flex:none;
  }
`;