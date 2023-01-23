import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  background-color: ${props => props.bg};
  padding: 16px 35px;
  border-radius: 4px;
  z-index: 1;
  bottom: 50%;

  svg{
    font-size:35px;
    stroke-width: 1;
    color: #fff;
  }
  h1{
    font-size: 1.5rem;
    color: #fff;
  }
`

