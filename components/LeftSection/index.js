import Header from './Header'
import SubscribeSection from "./SubscribeSection"
import styled from 'styled-components'


// STYLES
const Wrapper = styled.div`
// background: teal;
height: 100vh;
grid-area: a;
overflow-x: auto;
border-right: solid 2px #000;
position: sticky;

@media only screen and (max-width: 1024px) {
  height: auto;
}
`

const LeftSection = () => {
  return (
    <>
     <Wrapper>
            <Header />
            <SubscribeSection />
       </Wrapper>
    </>
  )
}

export default LeftSection