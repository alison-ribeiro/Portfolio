import styled from "styled-components";
import { devices } from '../../Responsive/';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
 
`
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  color: ${props => props.theme.colors.black};
  span{
    color: ${props => props.theme.colors.blue} ;
  }
  @media ${devices.mobileL} {
    
  }

`
export const Paragraph = styled.p`
  display: flex;
  font-size: .8rem;
  margin: 30px 0;
  text-align: center;
  width: 900px;
  padding: 0 15px;
  @media ${devices.mobileL} {
    width: 320px;
  
  }
`
export const ContainerIcon = styled.p`
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
      }
    }
  }
  @media ${devices.mobileL} {
    a{
      font-size: 2.5rem;
    }
    
		
	
  }
`