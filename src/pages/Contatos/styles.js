import styled from "styled-components";

export const Container = styled.div`
  display: flex;

 a{
  
  svg{
    color: green;
    font-size: 55px;
  }
 }
 form{
  display: flex;
  flex-direction: column;
  flex: 1;
  textarea{
    all: unset;
    padding: 10px 10px;
    border: 1px solid ${props => props.theme.colors.secundary};
    margin: 15px 0;
    font-size: .7rem;
    text-transform: none;
  ::placeholder{
  color: ${props => props.theme.colors.primary};
  }
 }
 .container-contato{
  display: flex;
  flex-direction: column;
  flex: 1;
 }
 
`
export const Input = styled.input`
  all: unset;
  
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.colors.secundary};
  margin: 15px 0;
  font-size: .7rem;
  text-transform: none;
 ::placeholder{
  color: ${props => props.theme.colors.primary};
  
 }
`
