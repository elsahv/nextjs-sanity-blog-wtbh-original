import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: left;
  font-size: 20px;
  margin: 15px 0;
  padding-left: 4px;
  color: gray;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 21px;
  }
`;
const Banner = () => {
  return (
    <Wrapper id="home">
      An illustrative blog about food and mental wellness...
    </Wrapper>
  );
};

export default Banner;
