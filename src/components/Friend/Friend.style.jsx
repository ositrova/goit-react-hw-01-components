import styled from "styled-components";

export const List = styled.ul `
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 50px;

`

export const Item = styled.li `
width: 200px;
border: 1px solid black;
border-radius: 5px;
box-shadow: 5px 2px 2px #727171;
background-color: aliceblue;
list-style: none;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 10px;
padding: 10px;
`

export const Status = styled.span `
width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.status};
  
`

export const Avatar = styled.img `
width: 50px;
padding: 5px;
border: 1px solid black;
border-radius: 5px;
box-shadow: 5px 2px 2px #727171;
background-color: white;
`

export const Name = styled.p `
margin: 0;
`