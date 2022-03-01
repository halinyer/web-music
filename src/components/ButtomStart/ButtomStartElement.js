import styled from 'styled-components';


export const Buttom = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  justify-content: center;
  width: 150px;
  cursor: pointer;
  margin: 30px 0px;
  width: 170px;
  height: 40px;
  


`


export const ButtomIcon = styled.div`
   width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  /* From https://css.glass */
/* background: rgba(255, 255, 255, 0.39);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px); */
background: #e9ecef;

  div{
  display: flex;
  justify-content: center;
  align-items: center;
  }

border-radius: 6px 0px 0px 6px;
`


export const ButtomText = styled.p`  
 color: black;
 display: flex;
 justify-content: center;
 align-items: center;


 /* From https://css.glass */
/* background: rgba(255, 255, 255, 0.45);
//border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px); */
background: #f8f9fa;

border-radius: 0px 6px 6px 0px;

`