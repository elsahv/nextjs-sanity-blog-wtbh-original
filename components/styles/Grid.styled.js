import styled from "styled-components";

export const Grid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const LeftSide = styled.div`
  grid-area: leftSide;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;
export const RightSide = styled.div`
  grid-area: rightSide;
  // background: coral;
  display: flex;
  justify-content: center;
`;
