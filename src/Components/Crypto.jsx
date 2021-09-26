import React from "react";
import { Table, TBODY, TROW } from "./styledComp/table";

const Crypto = (props) => {
  return (
    <TROW>
      <TBODY flex="0.5">
        <img src={props.img} alt={props.symbol} width="30px" />
      </TBODY>
      <TBODY flex="1">{props.symbol}</TBODY>
      <TBODY flex="3">{props.name}</TBODY>
      <TBODY flex="1.5">{props.cprice}</TBODY>
    </TROW>
  );
};

export default Crypto;
