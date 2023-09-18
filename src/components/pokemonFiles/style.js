import styled from "styled-components";

export const SearchContainer = styled.div`
   display: flex;
   margin: 5px 20px 10px ;
   padding: 0px auto;
   align-items: center;
   justify-content:center;
 
`

export const Search = styled.div`
   background-color: none;
   margin-right: 20px;
   border-radius: 10px;
   
`

export const InputSearch = styled.input`
   padding: 10px;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   border: none;
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Play', sans-serif;
`

export const ButtonSearch = styled.button`
   background-color: cornflowerblue;
   border: none;
   border-radius: 10px;
   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
   height: 38px;
   color: white;
   padding: 10px 12px;
   cursor: pointer;
   align-items: center;
   font-family: 'Josefin Sans', sans-serif;
   font-family: 'Play', sans-serif;
   font-weight: 700;
   transition: 0.3s ease-in-out;
   margin-left: 5px;
   &:hover {
   color:#000;
  
  
  };
`

export const GitPokemon = styled.img`
   transform: scaleX(-1) ;
   width:60px;
`

export const GitPokemon2 = styled.img`
   transform: scaleX(-1) ;
   width:40px;
`

export const GitPoke = styled.img`
   width:40px;
`

