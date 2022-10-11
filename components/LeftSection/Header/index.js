import Logo from "./Logo";
import Navlink from "./Navlink";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: red;
  padding: 30px 5px 0 15px;
  margin-top: 400px;

  @media only screen and (max-width: 1024px) {
    margin-top: 700px;
  }

  @media only screen and (max-width: 834px) {
    margin-top: 500px;
  }
`;

const indexHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <Navlink />
    </Wrapper>
  );
};

export default indexHeader;
