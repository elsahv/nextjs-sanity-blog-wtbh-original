import styled from "styled-components";

export const ServicesGrid = styled.div`
  background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const ServiceLeft = styled.div`
  grid-area: leftSide;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ServiceRight = styled.div`
  grid-area: rightSide;
  // background: coral;
  display: flex;
  justify-content: center;
`;
