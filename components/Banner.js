import styled from "styled-components";

export const Wrapper = styled.h2`
  font-size: 20x;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 20px;
  padding: 60px 30px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  background: #588157;
  border-bottom: solid 2px black;

  @media only screen and (max-width: 834px) {
    padding: 30px 10px;
    // border: none;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
    padding-top: 30px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding: 30px 20px;
  }
`;
const Banner = () => {
  return (
    <Wrapper id="home">
      An up and coming blog about food and mental wellness... Content coming
      soon!
    </Wrapper>
  );
};

export default Banner;
