import styled from "styled-components";

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
  margin: 0 5px;
  flex: ${(props) => props.flex || "auto"};
  border: 1px solid black;
  text-align: left;
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;
export const TBODY = styled.div`
  padding: 10px;
  text-align: ${(props) => props.ta || "left"};
  width: 150px;
  border-radius: 10px;
  margin: 10px 5px;
  flex: ${(props) => props.flex || "auto"};
  border: 1px solid black;
`;
