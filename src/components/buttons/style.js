import styled from "styled-components";

export const ButtonHeader = styled.button`
   color:white;
   font-family:Helvetica, sans-serif;
   font-weight:bold;
   font-size:20px;
   text-align: center;
   text-decoration:none;
   background-color: #FF0000;
   display:block;
   position:relative;
   padding:5px 15px;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   text-shadow: 0px 1px 0px #000;
   filter: dropshadow(color=#000, offx=0px, offy=1px);
   -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
   -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
   box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   border-radius: 5px;
   transition: background-color 0.3s ease;
   cursor: pointer;
 }
 &:active{
   top:10px;
   background-color:#F78900;
   -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
   -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #915100;
   box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #915100;
 }
 &:after{
   content:"";
   height:100%;
   width:100%;
   padding:4px;
   position: absolute;
   bottom:-15px;
   left:-4px;
   z-index:-1;
   background-color:#2B1800;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   border-radius: 5px;
 }
`

export const ContainerButton = styled.div`
  margin: 6px 5px 10px 5px;
  padding: 5px;
`

export const BtnMaisPokemon = styled.button`
    display: block;
    width: 100%;
    padding:5px;
    webkit-transition-duration: 0.2s; 
    transition-duration: 0.4s;
    cursor: pointer;
    border: solid 3px #000;
    border-radius: 5px ;
    height: 40px;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Play', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #FFF;
    background-color: red;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    &:hover {
    transition-duration: 0.2s;
    color: #000;
  }
   &:active{
    background-color:rgba(245, 239, 71, 0.6)
   }
`