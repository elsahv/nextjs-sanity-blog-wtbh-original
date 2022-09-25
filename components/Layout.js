

import GlobalStyles from './Global.js'
// import Footer from './Footer'
import Sidebar from './LeftSection/Header/Sidebar.js'
import LeftSection from './LeftSection/index.js'
import styled from 'styled-components'
 


const Wrapper = styled.div`
position: absolute;
top: 0;
z-index: 12;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-areas:
'a b b b';

@media only screen and (max-width: 1024px) {
  margin-top: 90px;
  grid-template-columns: 1fr;
grid-template-areas:
'b'
'b'
'b'
'a';
}
`

const RightSection = styled.div`
grid-area: b;
height: 100vh;
width: 100%;
overflow-x: hidden;
background: teal;

@media only screen and (max-width: 1024px) {
  height: auto;
}
`
 

export default function Layout({ children }) {
  return (  
    <>
      <GlobalStyles />
    <Sidebar />
    <Wrapper>
    <LeftSection />

    <RightSection>
      <main>
        {children}
        </main>
        </RightSection>
        </Wrapper>
    {/* <Footer /> */}
    </>
  )
}