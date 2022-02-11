import React, { useEffect, useState,useContext } from "react";
import { db } from "../config/firebase";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { collection, query, getDocs } from "firebase/firestore";
import {UserContext} from "../context/userContext"
import unAuth from "../assets/401.png"



function BitcoinPage() {
  const [btcPrices, setbtcPrices] = useState([]);
  const {user} = useContext(UserContext)
  useEffect(() => {
      async function fetchBitcoinPrice(){
        const q = query(collection(db, "bitcoin-prices"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          setbtcPrices((arr) => [...arr, data]);
        });
     
      }
      fetchBitcoinPrice();
   }, []);

  const formatDate = (res) => {
    let time = new Date(res).toLocaleTimeString([]);
    return time;
  };
  let x = [];
  let y = [];

  btcPrices.forEach((i) => x.push(i.price));

  btcPrices.forEach((i) => {
    y.push(formatDate(i.time));
  });

  const data = {
    labels: y,
    datasets: [
      {
        label: "Price of Bitcoin",
        data: x,
        fill: true,
        backgroundColor: ["#272a38"],
        borderColor: ["#ffffff"],
        tension: 0.5,
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      {!user?(
          <>
                        <div style={{textAlign:"center"}}>
          <h1>Please Login</h1>
          <img src={unAuth}  width="40%" alt="" />
          
        </div>
          </>

      ):(
      <div className="bitcoin-page">
      <div className="card">
        <div className="img">
          <img
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            width="70%"
            alt=""
          />
        </div>
        <div className="right">
          <h1>Bitcoin (BTC)</h1>
          <h5>USD value: ${x.findLast((item) => true)} </h5>
        </div>
      </div>
      <div className="graph">
        <Chart height="35vh" width="70vw" type="line" data={data} />
      </div>
      </div>)}
    </>
  );
}

export default BitcoinPage;
