
import styled, { css } from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;


 form{
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  height: 100%;
  button{
    all:unset;
    display: block;
    align-self: flex-start;
    font-weight: bold;
    border: 1px solid ${props => props.theme.colors.secundary};
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    :hover{
      background-color: ${props => props.theme.colors.blue};
      color: white;
    }
    :disabled{
      opacity: .5;
      background: none;
      cursor: default;
      color: inherit;
    }
    @media ${devices.mobileL} {
      text-align:center;
      padding: 15px 0;
      width: 100%;
      margin: 25px 0;
    }

  }
}

@media ${devices.mobileL} {
    flex-direction: column;
    .container{
      width: 100%;
      margin-bottom: 80px;
    }
  }
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  span{
    margin-top: 2px;
    font-size: .78rem;
    color: red;
  }

`
export const Input = styled.input`
    all: unset;
    border: 1px solid ${props => props.theme.colors.secundary};
    padding: 20px 15px;
    font-size: 1.1rem;
    text-transform: none;
    word-wrap: break-word;
    transition: all .5s;
    ${({error}) => error && css`
      border-color: red !important;;
    `}
`
export const Textarea = styled.textarea`
    all: unset;
    border: 1px solid ${props => props.theme.colors.secundary};
    padding: 20px 15px;
    font-size: 1.1rem;
    text-transform: none;
    line-height: 25px;
    word-wrap: break-word;
    ${({error}) => error && css`
      border-color: red !important;;
    `}
`
