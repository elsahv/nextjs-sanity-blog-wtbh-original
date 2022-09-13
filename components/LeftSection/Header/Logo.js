import Link from 'next/link'
import styled from 'styled-components'




const LogoWrapper = styled.div`
font-size: 50px;
font-weight: 900;
padding-top: 70px;
padding-left: 50px;

a {
text-decoration: none;
color: gray;
}

@media only screen and (max-width: 1024px) {
  display: none;
}

@media only screen and (max-width: 768px) {
  font-size: 20px;
  padding: 15px 0 5px 25px;
   `

   

 const Logo = () => {
   return (
    <LogoWrapper> 
    <Link href="/">
      Writing to Better Health
      </Link>
    </LogoWrapper> 
   )
 }
 
 export default Logo