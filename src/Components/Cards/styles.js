import styled from "styled-components";

//const active = props => props.active;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ;
  border-top: 5px solid ;
  border-radius: 4px;
  padding: 20px 10px;
  margin: 30px 0;
  height: 150px;

  h3{
    font-size: .5rem;
    position: relative;
    &::before{
      content: " ";
      width: 35px;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
      position: absolute;
      bottom: -15px;
    }
  }
  p{
    margin-top: 30px;
    text-align: start;
    width: 200px;
    font-size: .4rem;
  }
  &:hover{
    border-top: 5px solid blue;
    transform: scale(1.1);
  }
`