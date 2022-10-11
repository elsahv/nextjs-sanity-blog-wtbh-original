import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-left: 120px;
  text-align: left;
  font-size: 30px;
  text-shadow: 1px 1px 1px gray;
  color: aquamarine;

  @media only screen and (max-width: 834px) {
    font-size: 26px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 23px;
    padding-top: 80px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 21px;
    padding-top: 40px;
  }
`;
const Banner = () => {
  return (
    <Wrapper id="home">
      - An illustrative blog about food and mental wellness -
    </Wrapper>
  );
};

export default Banner;
