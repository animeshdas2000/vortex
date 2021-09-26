import axios from "axios";
import React, { useState, useEffect } from "react";
import Crypto from "../Components/Crypto";
import { PButton, Select, Option } from "../Components/styledComp/Buttons";
import { Table, TROW, THEAD } from "../Components/styledComp/table";
function Tracker() {
  const [coins, setCoins] = useState([]);
  const [curr, setCurr] = useState("usd"); //Currency State
  const handleCurrChange = (e) => {
    setCurr({ value: e.target.value });
  };
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: curr,
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const THeadData = [
    {
      title: "Icon",
      flex: "0.5",
    },
    {
      title: "Symbol",
      flex: "1",
    },
    {
      title: "Name",
      flex: "3",
    },
    {
      title: "Current Price",
      flex: "1.5",
    },
  ];

  return (
    <>
      <div>
        <p>Filters</p>

        <Select value={curr} onChange={handleCurrChange}>
          <Option value="usd">USD</Option>
          <Option value="inr">INR</Option>
          <Option value="gbp">GBP</Option>
        </Select>
        <PButton>Update</PButton>
      </div>
      <Table>
        <TROW>
          {THeadData.map((thd) => {
            return <THEAD flex={thd.flex}>{thd.title}</THEAD>;
          })}
        </TROW>

        {coins.map((coins) => {
          return (
            <Crypto
              img={coins.image}
              symbol={coins.symbol}
              name={coins.name}
              cprice={coins.current_price}
            />
          );
        })}
      </Table>
    </>
  );
}

export default Tracker;
