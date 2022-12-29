import Link from "next/link";
import styled from "styled-components";

export const NavSection = styled.nav`
  cursor: pointer;
  display: flex;
  // justify-content: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

export const NavLinks = styled.div`
  font-size: 25px;
  display: flex;
  a {
    color: #000;
    text-decoration: none;
    margin: 0 15px;
  }
  a:hover {
    color: maroon;
    transition: 1s;
  }
`;

const Navlink = () => {
  return (
    <NavSection>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/web-development">Web Development</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
    </NavSection>
  );
};

export default Navlink;
