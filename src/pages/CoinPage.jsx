import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cryptoAPI } from "../services/axios";

function CoinPage() {
  let params = useParams();
  const id = params.symbl;
  // const [coinImg,setCoinImg] = useState("")
  // const [coinPrice,setCoinPrice] = useState([])
  const [coin, setCoin] = useState({
    name: "",
    symbol: "",
    coinImg: [],
    coinPrice: "",
    mktCap: "",
  });

  useEffect(() => {
    //   async function getCoin(){
    //     const res = await cryptoAPI.get(`/coins/${id}`);
    //     let data = await res.data;
    //     setCoin(data);
    //   }
    // getCoin();
  
    cryptoAPI
      .get(
        `/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => {
        console.log(res);
        let market_data = res.data.market_data;
        setCoin({
          name: res.data.name,
          symbol: res.data.symbol,
          coinImg: res.data.image,
          coinPrice: market_data.current_price.usd,
          mktCap: market_data.market_cap.usd,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="card">
        <div className="img">
          <img src={coin.coinImg.large} width="70%" alt="" />
        </div>

        <div className="right">
          <h1>{coin.name} ({coin.symbol})</h1>
          <h3></h3>
          <h3>${coin.coinPrice} </h3>
          <h3>${coin.mktCap} </h3>
        </div>
      </div>
    </>
  );
}

export default CoinPage;
