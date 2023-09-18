import styled from "styled-components";
import { typeColors } from "../../themes/typeColors.js";

export const Card = styled.li`
  background-image: linear-gradient(to bottom, #FF0000, #FF0000),
  linear-gradient(to bottom, #FFF, #FFF);
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-position: top, bottom;
  border: 3px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 250px;
  flex: 1;
  position:relative;
`

export const PokeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height:120px;
  width:120px;
  background-color: ${props => typeColors[props.pokemon.types[0].type.name]};
  border: 3px solid #000;
  position:relative;
  top:15px;
`;

export const PokeImage = styled.img`
  height: 120px;
  width: 150px;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const NamePokemon = styled.h3`
  font-size: 20px;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Play', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
  margin-top:10px;
`;

export const ContainerId = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IdPokemon = styled.p`
  display: block;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 3px;
  position: absolute;
  top:1px;
`;

export const ImgGif = styled.img`
  width: 45px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
  position:relative;
  top:5px;
  padding-right: 5px;
`;