import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.backgroundColor};
    transition: .6s ease-in-out;
    overflow: auto;
    width: 60%;
    max-height: 85%;
    margin: 0 auto;
    padding: 10px;
    `