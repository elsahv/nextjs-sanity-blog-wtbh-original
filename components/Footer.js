import styled from "styled-components";
import SubscribeSection from "./SubscribeSection";

const Wrapper = styled.div`
  padding: 10px;
  // border-top: solid 2px black;
  text-align: center;
  position: relative;
  bottom: 0;
  right: 0;
  color: gray;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <>
      <Wrapper>The Indoor Jungle Project- copyright @2022</Wrapper>
    </>
  );
};

export default Footer;
