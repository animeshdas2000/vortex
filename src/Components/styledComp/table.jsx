import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  padding: 20px;
  border-radius: 10px;

  background-color: ${(props) => props.bg || "#161b33"};
`;
export const TROW = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const THEAD = styled.div`
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  margin:  5px;
  flex: ${(props) => props.flex || "auto"};
  /* border: 1px solid white; */
  color: ${(props) => props.color || "#f8f9fa"};
  background-color: ${(props) => props.bg || "#474973"};
  text-align: left;
  //#262157
`;

export const TBODY = styled.div`
  padding: 10px;
  text-align: ${(props) => props.ta || "left"};
  width: 150px;
  border-radius: 10px;
  margin: 5px;
  flex: ${(props) => props.flex || "auto"};
  color: ${(props) => props.color || "#f8f9fa"};
  &:nth-child(odd) {
    background-color: #474973;
  }
  &:nth-child(even) {
    background-color: #262157;
  }
`;
