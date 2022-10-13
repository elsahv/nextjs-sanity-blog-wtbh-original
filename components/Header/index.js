import Logo from "./Logo";
import Navlink from "./Navlink";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border: solid 2px gray;
  position: sticky;
  background: #fff;
  top: 0;
  z-index: 10000;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavSection = styled.div`
  flex-direction: column;
`;

const indexHeader = () => {
  return (
    <Wrapper>
      <NavSection>
        <Logo />
        <Navlink />
      </NavSection>
    </Wrapper>
  );
};

export default indexHeader;
