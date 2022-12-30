import styled from "styled-components";

export const Container = styled.div`
  display: flex;
     
 form{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
    
  textarea, input{
    all: unset;
    padding: 20px 15px;
    border: 1px solid ${props => props.theme.colors.secundary};
    margin: 15px 0;
    font-size: 1.1rem;
    text-transform: none;
    line-height: 25px;
    word-wrap: break-word;
  ::placeholder{
  color: ${props => props.theme.colors.primary};
  }
 }
 .button{
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
 }
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;

  .container-icon{
    display: flex;
    padding: 18px;
    margin-left: 16px;
    margin-bottom: 15px;
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
 
 
`


