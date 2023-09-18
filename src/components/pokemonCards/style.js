import styled from "styled-components";

export const BtnX = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  box-shadow: 3px 4px 0px 0px #8a2a21;
  background: linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
  background-color: #c62d1f;
  border-radius: 18px;
  border: 1px solid #d02718;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #810e05;
  &:hover {
    background: linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
    background-color: #f24437;
  }
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 300px;
  margin: auto;
  border: 3px solid #000;
  border-radius: 20px;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
  margin-bottom: 40px;
  overflow: hidden; 
`

export const CardImage = styled.div`
  img {
    padding:10px;
    width: 180px;
    margin-top:20px;
  };
  h1{
    color:#233e63;
    background-color:;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Play', sans-serif;
    padding:2px
  }
`

export const ContainerBtn = styled.div`
   diplay:flex;
   gap:10px;
`

export const BtnTypes = styled.button`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 3px;
    margin:5px;
    box-shadow: 0px 1px 0px 0px #f0f7fa;
    background:linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
    background-color:#33bdef;
    border-radius:6px;
    border:1px solid #057fd0;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px -1px 0px #5b6178;
  &:hover{
    background:linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
	  background-color:#019ad2;    
}
  &:active{
    position:relative;
	  top:1px;
}
`

export const SelectBtn = styled.p`
   font-size:17px;
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Play', sans-serif;
   font-weight: 700;
   padding: 30px;
`

export const ListDetalis = styled.ul`
   max-height: 200px; 
   overflow: auto; 
   padding: 10px; 
`

export const Detalis = styled.li`
   padding:4px;
  h3{
    font-size: 12px;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Play', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    padding: 2px;
  };
  p{
    font-size:12px;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Play', sans-serif;
    font-weigth: 400;
    color:#6f8bb3;
    padding: 0px 4px 0px 4px;
  }
`

export const ContainerIcons = styled.div`
   position: absolute;
   top: 10px;
   left: 10px;
`

export const Icons = styled.img`
   width:30px;
   padding:1px;
  &:hover{
    cursor: pointer;
  }
}
`

export const Container = styled.div`
   background: url(${props => props.theme.backgroundImage}) center bottom no-repeat ;
   transition: .6s ease-in-out;
   background-size: cover;
   height: 100vh;
`