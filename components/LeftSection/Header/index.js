import Logo from "./Logo";
import Navlink from "./Navlink";
import styled from "styled-components";
import Banner from "./Banner";

const Wrapper = styled.div`
  padding: 30px 15px 0 15px;
  margin-top: 300px;

  @media only screen and (max-width: 1024px) {
    margin-top: 700px;
  }

  @media only screen and (max-width: 834px) {
    margin-top: 500px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 300px;
  }
`;

const indexHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <Banner />
      <Navlink />
    </Wrapper>
  );
};

export default indexHeader;
