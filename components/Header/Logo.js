import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled.div`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-decoration: none;
  color: gray;
  text-shadow: 1px 1px 1px black;
  margin-top: 30px;
  a {
    color: gray;
    text-decoration: none;
  }
`;

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <Link href="/">Writing to Better Health</Link>
      </LogoWrapper>
    </>
  );
};

export default Logo;