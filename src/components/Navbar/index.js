import React,{useState,useEffect, useRef} from 'react';
import { useLocation } from 'react-router';
import {BsInstagram} from 'react-icons/bs'
import BurguerButtom from '../BurguerButtom';
import {Nav,NavLogo,NavbarContainer, NavItem, NavList, NavMobile} from './NavbarElements'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeLink, setactiveLink] = useState(false);
  let location = useLocation()
  let NavListRef = useRef()

  const handleClick = () => {
    setActiveMenu(!activeMenu)
  }

  const isActiveLink = activeLink ? 'active-links' : '' 

 
  useEffect(() => {
    if (activeMenu) {
      setActiveMenu(false)
    }
    
     if (location.pathname !== '/') {
        setactiveLink(true)
     }else{
       setactiveLink(false)
     }
  }, [location]);

  return (
   <>
     <Nav>
         <NavbarContainer>
             <NavLogo to="/">
                 <img src='https://images.squarespace-cdn.com/content/v1/620ac6f49ad4db79c336850a/a639ad5c-25b4-4d12-953d-e8e2b76742fc/analogkidz_red2trans.png?format=1500w' />
             </NavLogo>

             <NavList ref={NavListRef} className={activeMenu ? "active": ""}>
                <NavItem className={isActiveLink}  to="/">Inicio</NavItem>
                <NavItem className={isActiveLink} to="/Production">Producciones</NavItem>
                <NavItem className={isActiveLink} to="About">Acerca de</NavItem>
                <NavItem className={isActiveLink} to="Contact">Conctacto</NavItem>
                <a className={isActiveLink +  ' red'} href="https://www.frames75.com/2021/ejemplo-react-router.html"><BsInstagram/></a>
             </NavList>

          <NavMobile>
            <BurguerButtom click={activeMenu} handleClick={handleClick}/>
          </NavMobile>
         </NavbarContainer>
     </Nav>
   </>
  )
}

export default Navbar