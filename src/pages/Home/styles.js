import styled from "styled-components";
import { devices } from '../../styles/responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  h1{
    color: ${props => props.theme.colors.black};
    font-size: 3rem;
    span{
      color: ${props => props.theme.colors.blue} ;
      font-size: inherit;
    }
  }
  p{
    font-size: 1.5rem;
    margin: 30px 0;
    text-align: center;
    width: 85%;

  }
  .container-icon{
    ul{
    display: flex;
      li{
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
          padding: 20px;
          border-radius: 50%;
          border: 3px solid ${props => props.theme.colors.secundary};
          svg{
            font-size: 1.6rem;
          }
          &:hover{
              border-color: ${props => props.theme.colors.blue};
          }
          &:hover svg{
              color: ${props => props.theme.colors.blue};
          }

        }
      }
    }
  }
  @media ${devices.tablet} {
    text-align: center;
    h1{
      width: 95%;
      font-size: 2.5rem;
    }
    p{
      font-size: 1.1rem;
      width: 95vw;

    }

  }
 `




