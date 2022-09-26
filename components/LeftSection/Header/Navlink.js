import Link from 'next/link'
import styled from 'styled-components'

export const NavSection = styled.nav`
cursor: pointer;
display: flex;
flex-direction: column;
padding-top: 10px;
`

export const NavLinks = styled.div`
font-size: 22px;
display: flex;
justify-content: flex-start;
flex-direction: column;
a {
    color: gray;
    text-decoration: none;
    padding-left: 5px;
}
 a:hover {
    color: aquamarine;
    transition: 1s;
    text-shadow: 1px 1px 1px black;
 }
    @media only screen and (max-width: 1024px) {
    display: none;
            }
`

 
 const Navlink = () => {
   return (
<NavSection>
 <NavLinks>
    <Link href="/#home">Home</Link>
    <Link href="/#about">About</Link>
    <Link href="/#contact">Contact</Link>
   </NavLinks>
   
    </NavSection>
   )
 }
 
 export default Navlink