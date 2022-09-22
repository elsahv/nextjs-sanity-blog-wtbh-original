import Logo from './Logo'
import Navlink from './Navlink'

import styled from 'styled-components'




const Wrapper = styled.div`
background: #fff;
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