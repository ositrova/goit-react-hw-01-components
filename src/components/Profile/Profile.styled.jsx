import styled from "styled-components";

export const Container = styled.div `
  width: 240px;
    margin-left: auto;
    margin-right: auto;
   background-color: aliceblue;
   margin-bottom: 40px;
   padding: 15px;
   border: 1px solid black;
   border-radius: 6px;
`

export const Description = styled.div `
display: flex;
flex-direction: column;
align-items: center;
`
export const Avatar = styled.img `
width: 180px;
border: 5px solid white;
border-radius: 50%;
margin-bottom: 30px;
`
export const Name = styled.p `
font-weight: 800;
margin: 0;
margin-bottom: 15px;
`

export const Tag = styled.p `
margin: 0;
margin-bottom: 10px;
font-weight: 600;
color: #727171;
`

export const Location = styled.p `
margin: 0;
margin-bottom: 30px;
color: #727171;
`

export const Stats = styled.ul `
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0px;
  margin-bottom: 15px;
  justify-content: center;
  list-style: none;
`

export const Item = styled.li `
display: flex;
flex-direction: column;
gap: 8px;
border: 1px solid white;
border-radius: 5px;
padding: 5px;
background-color: #bedcf7;
box-shadow: 5px 2px 2px #727171;
align-items: center;
`
export const Label = styled.span `
color: #727171;
`

export const Quantity = styled.span `
font-weight: 700;
`