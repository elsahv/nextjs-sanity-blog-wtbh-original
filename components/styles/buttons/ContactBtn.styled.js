import styled from "styled-components";

export const ContactBtn = styled.button`
  background: gray;
  border: solid 1px #000;
  font-size: 17px;
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 25px;
  // width: 280px;
  text-align: left;
  a {
    text-shadow: 1px 1px 1px #000;
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: 834px) {
    font-size: 15px;
  }
`;
