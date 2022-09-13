import PortfolioCTA from './PortfolioCTA'
import WTBH from './WTBH'
import styled from 'styled-components'


const Wrapper = styled.div`
background: #fff;
z-index: 100;
`


const AboutContent = () => {
  return (
    <Wrapper>
    <WTBH />
    <PortfolioCTA />
    </Wrapper>
  )
}

export default AboutContent