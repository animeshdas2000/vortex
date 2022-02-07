import axios from "axios";
import React, { useState, useEffect } from "react";
import Crypto from "../Components/Crypto";

import { Table, TROW, THEAD } from "../Components/styledComp/table";
// import data from "../services/currencycode.json";

// const supportedCurrency = ["USD", "GBP", "INR"];
function Tracker() {
  // const [curr, setCurr] = useState("GBP"); //Currency State
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const handleCurrChange = (e) => {
  //   setCurr(e.currentTarget.value);
  //   console.log(curr);
  // };
  // https://ipapi.co/currency/ ip-> currency
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "USD",
          order: "market_cap_desc",
          per_page: 20,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setCoins(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  if (isLoading) {
    return (
      <h2 style={{ color: "white", textAlign: "center" }}>
        Wait I'm Loading Cryptos for you
      </h2> // update for SVG
    );
  } else {
    return (
      <>
        <div>
          <h1 style={{ color: "white", textAlign: "center" }}>
           Market Watch
          </h1>
          

          {/* <Select>
            {supportedCurrency.map((item) => {
              return (
                <>
                  <Option value={item}>{item}</Option>
                </>
              );
            })}
          </Select>
          <PButton color="white">Update</PButton> */}

          <Table>
            <TROW>
              {THeadData.map((thd,key) => {
                return <THEAD key={key} flex={thd.flex}>{thd.title}</THEAD>;
              })}
            </TROW>

            {coins.map((coins,key) => {
              return (
                <Crypto
                key={key}
                  img={coins.image}
                  symbol={coins.symbol}
                  name={coins.name}
                  cprice={coins.current_price}
                />
              );
            })}
          </Table>
        </div>
      </>
    );
  }
}

export default Tracker;
