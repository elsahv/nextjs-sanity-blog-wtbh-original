import Header from "./Header";
import SubscribeSection from "./SubscribeSection";
import styled from "styled-components";

// STYLES
const Wrapper = styled.div`
  height: 100vh;
  width: 350px;
  overflow: hidden;
  grid-area: a;
  overflow-x: auto;
  border-right: solid 2px #000;

  @media only screen and (max-width: 1024px) {
    width: 250px;
  }

  @media only screen and (max-width: 600px) {
    // height: auto;
    display: none;
  }
`;

const LeftSection = () => {
  return (
    <>
      <Wrapper>
        <SubscribeSection />
        <Header />
      </Wrapper>
    </>
  );
};

export default LeftSection;
