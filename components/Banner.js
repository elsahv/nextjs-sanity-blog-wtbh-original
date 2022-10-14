import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-size: 20px;
  padding: 60px 20px;
  color: #fff;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding-left: 30px;
    padding-top: 30px;
    color: #000;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding: 30px 20px;
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
