import styled from "styled-components";

export const ThreeCol = styled.div`
  // background: pink;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "left middle right";
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "left middle"
      "right .";
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "middle"
      "right";
  }
`;

export const Left = styled.div`
  grid-area: left;
  // background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Middle = styled.div`
  grid-area: middle;
  // background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Right = styled.div`
  grid-area: right;
  // background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
