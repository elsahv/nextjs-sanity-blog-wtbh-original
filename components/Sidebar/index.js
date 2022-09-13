import Link from 'next/link'
import {
  SidebarWrapper,
  Logo,
  NavLinks
} from './sidebar.styled.js'




const Sidebar = () => {
  return (
    <>
    <SidebarWrapper>
    <Logo>
    <Link href="/">Elsa Hovey
    {/* - Development/ Design */}
    </Link>
    </Logo>

    <NavLinks>
    <Link href="/#services">Services</Link>
      <Link href="/#featuredWebsites">Featured Websites</Link>
      <Link href="/#contact">Contact</Link>
    </NavLinks>
    </SidebarWrapper>
    </>
  )
}

export default Sidebar