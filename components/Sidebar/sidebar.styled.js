
import styled from 'styled-components'




export const SidebarWrapper = styled.div`
text-align: center;
padding: 10px;
display: none;

@media only screen and (max-width: 1024px) {
display: block;
position: fixed;
top: 0;
z-index: 7500;
background: #3aa1aa;
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
   color: #000;
   text-decoration: none;
   font-size: 30px;
}

@media only screen and (max-width: 1024px) {
   a {
      // font-size: 23px;
   }
}
 `

export const NavLinks = styled.div`
font-size: 20px;
a {
   color: #000;
   text-decoration: none;
   margin: 0 15px;   
}

@media only screen and (max-width: 531px) {
// font-size: 15px;
display: flex;
flex-direction: column;
}
 `




export const JtImg = styled.div`
`
  

    