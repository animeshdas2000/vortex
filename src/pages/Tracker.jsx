import axios from "axios";
import React, { useState, useEffect } from "react";
import Crypto from "../Components/Crypto";
import { Table, TROW, THEAD } from "../Components/styledComp/table";
function Tracker() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
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
      title: "Name",
      flex: "1",
    },
    {
      title: "Symbol",
      flex: "3",
    },
    {
      title: "Current Price",
      flex: "1.5",
    },
  ];
  return (
    <>
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
