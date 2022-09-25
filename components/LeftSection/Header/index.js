import Logo from './Logo'
import Navlink from './Navlink'
import styled from 'styled-components'


const Wrapper = styled.div`
background: #fff;
padding: 80px 30px 0;

@media only screen and (max-width: 1024px) {
  padding: 0;
}
`


const indexHeader = () => {
  return (
    <Wrapper>
    <Logo />
    <Navlink />
    </Wrapper>
  )
}

export default indexHeader