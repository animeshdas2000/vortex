import styled from "styled-components";

export const TROW = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const THEAD = styled.div`
  padding: 10px;
  width: 150px;
  flex: ${(props) => props.flex || "auto"};
  text-align: left;
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10%;
`;
export const TBODY = styled.div`
  padding: 10px;
  text-align: left;
  width: 150px;

  flex: ${(props) => props.flex || "auto"};
  border: 1px solid black;
`;
