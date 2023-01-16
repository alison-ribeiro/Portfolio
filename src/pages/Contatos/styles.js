
import styled, { css } from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;

 form{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  textarea{
    all: unset;
    border: 1px solid ${props => props.theme.colors.secundary};
    padding: 20px 15px;
    font-size: 1.1rem;
    text-transform: none;
    line-height: 25px;
    word-wrap: break-word;
    ${({error}) => error && css`
      border-color: blue !important;;
    `}

  ::placeholder{
  color: ${props => props.theme.colors.primary};
  }
 }


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
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  flex: 1;


  .container-icon{
    display: flex;
    width: 100%;
    padding: 5px 0 5px 5px;
    margin: 15px ;
    background-color: ${props => props.theme.colors.bgColor};
  svg{
    margin: auto 0;
    border: 1px solid ${props => props.theme.colors.secundary};
    font-size: 2.5rem;
    padding: 8px;
    :hover{
      opacity: .5;
    }
  }
  .container-info{
    display: grid;
    margin-left: 15px;

    p{
      color:${props => props.theme.colors.black};
      font-size: 1.3rem;
    }
    a{

      :hover{
        opacity: .5;
      }
    }
  }
 }
}
@media ${devices.mobileL} {
    flex-direction: column;
    .container{
      width: 100%;
      margin-bottom: 80px;
    }
    .container-icon{
      width: 100% !important;
    }
  }

`



export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  span{
    margin-top:10px;
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
    line-height: 25px;
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
