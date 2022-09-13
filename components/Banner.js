import styled from 'styled-components'



export const Wrapper = styled.div`
padding: 100px 0px 0;
  font-size: 30px;
  text-shadow: 1px 1px 1px #000;
  color: #fff;

  @media only screen and (max-width: 1024px) {
    font-size: 23px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`
const Banner = () => {
  return (
    <Wrapper>
    An illustrative website about food and mental wellness...
      </Wrapper>
  )
}

export default Banner