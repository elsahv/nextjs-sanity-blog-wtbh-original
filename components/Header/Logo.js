import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled.div`
  font-size: 32px;
  font-weight: 900;
  // text-shadow: 1px 1px 1px maroon;
  a {
    color: #000;
    text-decoration: none;
  }
`;

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <Link href="/">fl-TEMPLATE MULTIPLE PAGES</Link>
      </LogoWrapper>
    </>
  );
};

export default Logo;
