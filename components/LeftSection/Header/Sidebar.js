import Link from 'next/link'
import styled from 'styled-components'




export const SidebarWrapper = styled.div`
text-align: center;
padding: 10px;
display: none;


 @media only screen and (max-width: 1024px) {
position: absolute;
top: 0;
z-index: 1;
display: block;
background: coral;
border: solid 2px black;
width: 100%;
 }

@media only screen and (max-width: 500px) {
   display: block;
}
`
 
export const Logo = styled.div`
font-weight: bold;
padding: 2px;
a {
   color: #fff;
text-shadow: 1px 1px 1px black;
   text-decoration: none;
   font-size: 30px;
}
@media only screen and (max-width: 531px) {
 a {
   font-size: 25px;
 }
}
 `

export const NavLinks = styled.div`
font-size: 20px;
a {
   color: #fff;
text-shadow: 1px 1px 1px black;
   text-decoration: none;
   margin: 0 15px;   
}

@media only screen and (max-width: 531px) {
// font-size: 15px;
display: flex;
flex-direction: column;
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
    <Link href="/#contact">Contact</Link>
   </NavLinks>
    </SidebarWrapper>
    </>
  )
}

export default Sidebar