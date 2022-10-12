import styled from "styled-components";
import Banner from "./LeftSection/Header/Banner";
import SubscribeSection from "./LeftSection/SubscribeSection";

const Wrapper = styled.div`
  text-align: left;
  padding-left: 100px;
  padding-bottom: 10px;
  position: relative;
  bottom: 0;
  right: 0;
`;

const MobileFooter = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    background: coral;
  }
`;

const Footer = () => {
  return (
    <>
      <MobileFooter id="subscribe">
        <Banner />
        <SubscribeSection />
      </MobileFooter>
      <Wrapper>copyright @2022</Wrapper>
    </>
  );
};

export default Footer;
