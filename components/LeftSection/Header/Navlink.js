import Link from 'next/link'
import styled from 'styled-components'

export const NavSection = styled.nav`
cursor: pointer;
display: flex;
flex-direction: column;
padding-left: 50px;
`

export const NavLinks = styled.div`
font-size: 25px;
display: flex;
justify-content: flex-start;
a {
    color: gray;
    text-shadow: 1px 1px 1px black;
    text-decoration: none;
    padding: 0 15px;
}
 a:hover {
    color: aquamarine;
    transition: 1s;
 }
    @media only screen and (max-width: 1024px) {
    display: none;
            }
`

 
 const Navlink = () => {
   return (
<NavSection>
 <NavLinks>
    {/* <Link href="/#services">Services</Link> */}
    <Link href="/#about">About</Link>
    <Link href="/#contact">Contact</Link>
   </NavLinks>
   
    </NavSection>
   )
 }
 
 export default Navlink