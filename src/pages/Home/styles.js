import styled from "styled-components";
import { devices } from '../../Responsive/';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
 `


export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 3rem;
  span{
    color: ${props => props.theme.colors.blue} ;
    font-size: inherit;
  }
  
  @media ${devices.tablet} {
    width: 400px;
  }
  
  

`
export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 30px 0;
  text-align: center;
  width: 58vw;
  padding: 0 30px;
  
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
  
  
`