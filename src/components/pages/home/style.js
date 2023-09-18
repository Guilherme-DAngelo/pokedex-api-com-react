import styled from "styled-components";

export const Container = styled.div`
    background: url(${props => props.theme.backgroundImage}) center bottom no-repeat ;
    transition: .6s ease-in-out;
    background-size: cover;
    display: block;
    height: 100vh;
    overflow: auto;    
`