import Link from 'next/link'
import styled from 'styled-components'



export const SidebarWrapper = styled.div`
text-align: center;
padding: 8px 0 15px 0;
display: none;
background: #fff;
border: solid 2px black;
width: 100%;

 @media only screen and (max-width: 1024px) {
position: relative;
top: 0;
z-index: 200;
display: block;
 }

 @media only screen and (max-width: 1024px) {
 }
`
 
export const Logo = styled.div`
font-weight: bold;
padding-top: 15px;
a {
   color: gray;
text-shadow: 1px 1px 1px black;
   text-decoration: none;
   font-size: 35px;
}
@media only screen and (max-width: 531px) {
   padding: 10px;
 a {
   font-size: 24px;
 }
}
 `

export const NavLinks = styled.div`
font-size: 30px;
a {
   color: gray;
text-shadow: 1px 1px 1px black;
   text-decoration: none;
   margin: 0 15px;   
}

@media only screen and (max-width: 531px) {
display: flex;
justify-content: center;
// flex-direction: column;
font-size: 20px;
}
 `





const Sidebar = () => {
  return (
    <>
    <SidebarWrapper>
    <Logo>
    <Link href="/">Writing to Better Health
    </Link>
    </Logo>

    <NavLinks>
    <Link href="/about">About</Link>
    <Link href="/about/#contact">Contact</Link>
   </NavLinks>
    </SidebarWrapper>
    </>
  )
}

export default Sidebar