import styled from "styled-components";

export const Table = styled.table` 
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    border-spacing: 0; 
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 5px 2px 2px #727171;
    overflow: hidden;
`;

export const TableTitle= styled.tr`
    height: 40px;
    background-color: rgb(80, 136, 242);
    text-transform: uppercase;
    color: white;
`;

export const TableItem = styled.tr`
    height: 40px;
    text-align: center;
    text-transform: capitalize; 
     &:nth-child(even) {
    background-color: #d4e7f8;
  }
`;