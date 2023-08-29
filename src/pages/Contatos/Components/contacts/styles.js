import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: flex-start;
  flex: 1;

  .container-contacts{
    display: flex;
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
  .contacts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;


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
  .copyContent{
    display: flex;
    align-items: center;
    padding-left: 5px ;
    cursor: pointer;
    svg{
        font-size: 1.2rem;
    }
  }
 }

`