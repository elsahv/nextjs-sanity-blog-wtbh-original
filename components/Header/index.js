import Logo from "./Logo";
import Navlink from "./Navlink";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 2px gray;
  @media only screen and (max-width: 600px) {
    display: none;
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
