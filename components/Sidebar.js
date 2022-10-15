import Link from "next/link";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  text-align: center;
  padding: 8px 0 15px 0;
  display: none;
  background: #fff;
  border-bottom: solid 2px black;
  width: 100%;

  @media only screen and (max-width: 600px) {
    position: relative;
    top: 0;
    z-index: 200;
    display: block;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  padding-top: 15px;
  a {
    color: gray;
    text-shadow: 1px 1px 1px black;
    text-decoration: none;
    font-size: 35px;
  }

  @media only screen and (max-width: 531px) {
    padding-top: 0px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
    a {
      font-size: 24px;
    }
  }
`;

export const NavLinks = styled.div`
  a {
    color: gray;
    text-decoration: none;
    margin: 0 15px;
  }

  @media only screen and (max-width: 531px) {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
`;

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <Logo>
          <Link href="/">Writing to Better Health</Link>
        </Logo>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/contact">Contact</Link>
        </NavLinks>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
