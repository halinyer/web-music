import styled from "styled-components";
import {Link } from 'react-router-dom'

export const Nav = styled.nav`
height: 100px;
border: 1px solid white;
background: transparent;
z-index: 100;
padding: 0px 38px;


`


export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;

.active{
    z-index: 10;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: white;

    a{
        display: initial;
        color: black;
        font-size: 2rem;
        margin-bottom: 35px;
    }

   
}

.active-links{
    color: #000;
}

`

export const NavMobile = styled.nav`
z-index: 100;
@media only screen and (min-width: 1000px){
    display: none;
} 

`

export const NavLogo = styled(Link)`
z-index: 30;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 400px;
}

@media only screen and (max-width: 800px){
    img{
    width: 250px;
}
}
`


export const NavList = styled.div`
z-index: 10;
a{
 margin-left: 20px;
 text-decoration: none;
}

.red{
    display:  none;
}

@media only screen and (min-width: 1000px){
    display: flex;
    align-items: center;
    
   a{
       font-size: 1.2rem;
       color: white;
       display: inline;
   }

   .red{
       display: initial;
   }
} 
`


export const NavItem = styled(Link)`
margin-left: 20px;
text-decoration: none;
font-size: 3rem;
@media only screen and (max-width: 1000px){
    display: none
};
`

