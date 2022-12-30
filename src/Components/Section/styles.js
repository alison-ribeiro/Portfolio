import styled from "styled-components";

export const ContainerPag = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  overflow-y: auto;
`


export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 87%;
  align-items: flex-start;
  
  h2{
   position: relative;
   font-size: 3rem;
   margin: 45px 0;
    &::after{
      content: " ";
      height: 4px;
      width: 100%;
      background-color:${props => props.theme.colors.blue};
      border-radius: 5px;
      position: absolute;
      bottom:-10px;
      left: 0;
    }
  }
`

export const ContainerInfo = styled.div`
  width: 100%;

  .seeAll{
    cursor: pointer;
    padding: 5px 0;
    font-size: 2rem;
    text-align: center;
    margin: 30px 0;
    background-color: #a4adf2;
    :hover{
      opacity: .5;
    }
  }

`