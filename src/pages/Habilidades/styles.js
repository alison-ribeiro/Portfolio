import styled from "styled-components";
import { devices } from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;

  @media ${devices.mobileL} {
    justify-content: flex-start;
  }
`

