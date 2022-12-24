import styled from "styled-components";



export const Container = styled.div`
  

  
`
export const MainContainer = styled.div`
    position: relative;
    width: 250px;
    height: 320px;
`
export const TheCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all .5s ease;
  background-color: yellow;
  &:hover{
    transform: rotateY(180deg);
  }
  
`
export const TheFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #ffc728;
  color: #333;
  
`
export const TheBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #fafafa;
  color: #333;
  transform: rotateY(180deg);
  
`