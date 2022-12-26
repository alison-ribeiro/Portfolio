import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow-y: auto;
  .container{
    display: flex;
    flex-wrap: wrap;
    
  }
  .cards{
    width: 200px;
    font-size: 13px;
    background-color: black;
    border: 1px solid white;
    margin: 1px;
    padding: 10px;
    border-radius:20px ;

    p, span{
      color: white;
      margin-top: 5px;
      font-weight: bolder;
      
    }
  }
`