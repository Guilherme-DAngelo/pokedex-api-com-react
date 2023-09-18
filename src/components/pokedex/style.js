import styled from "styled-components";

export const PokedexGrid = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  heigth:100vh;
  ${({ children }) => children.length === 1 && `
    height: 100vh;
  `}
`;
