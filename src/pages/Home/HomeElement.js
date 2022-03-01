import styled from 'styled-components'
import image from '../../images/back.jpg'

export const Section = styled.div`
   z-index: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background-size:cover;
    background-position:center center;
    background-image: url(${image});
  
    &:before{
        content:'';
	position: absolute;
        top: 0;
	bottom: 0;
	left: 0;
	right: 0;
        background-color: rgba(0,0,0,0.6);
    }

`


export const Content = styled.div`
z-index: 10;
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h2,
p,
button,
div{
  position: relative;
}



h2{
    font-size: 4rem;
    margin: 10px 0px;
}

p{
font-size: 1.2rem;

}

@media screen and (max-width:700px){
    h2{
    font-size: 3rem;
}

 p{
     font-size: 0.9rem;
 }
}


@media screen and (max-width:600px){
    h2{
    font-size: 2.5rem;
}


@media screen and (max-width:500px){
    h2{
    font-size: 1.6rem;
   }


   p{
       font-size: 0.8rem;
   }




}


`