import styled from 'styled-components'



export const Wrapper = styled.div`
padding-top: 80px;
padding-left: 50px;
  font-size: 35px;
  text-shadow: 1px 1px 1px gray;
  color: aquamarine;

  @media only screen and (max-width: 834px) {
    font-size: 27px;
    padding: auto;
  }

  @media only screen and (max-width: 600px) {
    font-size: 23px;
  }
`
const Banner = () => {
  return (
    <Wrapper>
    - An illustrative website about food and mental wellness...
      </Wrapper>
  )
}

export default Banner