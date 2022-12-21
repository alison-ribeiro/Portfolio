import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: red;
  color: white;
  max-height: 100vh;
  height: 100vh;
  max-width: 340px;
  overflow: hidden;
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color:blue ;
  border-bottom: 1px solid white;
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  padding: 250px 0;
`
export const HeaderImage = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  padding: 2.8rem;
  border: 8px solid ${props => props.theme.colors.primary};
  background-color: white;
  margin: 25px 0;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li{
    margin: 20px 0;
  }
`
export const Footer = styled.footer`
  padding: 15px 0;
`