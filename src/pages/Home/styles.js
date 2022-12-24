import styled from "styled-components";
import { devices } from '../../Responsive/';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
 
`


export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${props => props.theme.colors.black};
  span{
    color: ${props => props.theme.colors.blue} ;
  }
  
  @media ${devices.tablet} {
    width: 400px;
  }
  
  

`
export const Paragraph = styled.p`
  display: flex;
  font-size: .8rem;
  margin: 30px 0;
  text-align: center;
  width: 58vw;
  padding: 0 30px;
  line-height: 1.33rem;
  @media ${devices.tablet} {
    width: 90vw;
  }
 
`
export const ContainerIcon = styled.div`
  display: flex;
  ul{
    display: flex;
    li{
      
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        height: 30px;
        width: 30px;
        padding: 16px;
        border-radius: 50%;
        border: 3px solid ${props => props.theme.colors.secundary};
        &:hover{
            border-color: ${props => props.theme.colors.blue};
        }
        &:hover svg{
            color: ${props => props.theme.colors.blue};
        }
        
      }
    }
  }
  
  
`