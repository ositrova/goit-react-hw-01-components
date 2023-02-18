import styled from "styled-components";

export const Section = styled.section `
width: 500px;
    margin-left: auto;
    margin-right: auto;
   background-color: aliceblue;
   margin-bottom: 40px;
   padding: 15px;
   border: 1px solid black;
   border-radius: 6px;
   margin-bottom: 50px;
`

export const Title = styled.h2 `
    display: flex;
    justify-content: center;
    font-weight: 800;

`
export const StatList = styled.ul `
display: flex; 
justify-content: space-around;
padding: 0;

`
export const Item = styled.li `
display: flex; 
flex-direction: column;
list-style: none;
align-items: center;
padding: 20px;
border: 1px solid inherit;
border-radius: 5px;
box-shadow: 5px 2px 2px #727171;
width: 80px;


`
export const Label = styled.span `
color: white;
font-weight: 800;


`
export const Percentage = styled.span `
color: white;
font-weight: 600;
`
