import Link from "next/link";
import styled from "styled-components";

export const NavSection = styled.nav`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const NavLinks = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  a {
    color: gray;
    text-decoration: none;
    padding-left: 5px;
  }
  a:hover {
    color: coral;
    transition: 1s;
  }
`;

const Navlink = () => {
  return (
    <NavSection>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </NavSection>
  );
};

export default Navlink;
