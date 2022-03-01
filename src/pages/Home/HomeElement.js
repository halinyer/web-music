import styled from 'styled-components'


export const Section = styled.section`
 z-index: 0;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    background-size:cover;
    background-position:center center;
    background-image: url('https://images.squarespace-cdn.com/content/v1/620ac6f49ad4db79c336850a/c931f376-92b5-4fb5-8e7b-75bbc48e5a28/mainsquare.jpg?format=1500w');
    


`


export const Content = styled.div`
z-index: 10;
height: 100vh;
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;




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
}


`