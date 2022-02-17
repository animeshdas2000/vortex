import React, { useEffect,useContext,useMemo } from "react";
import { db } from "../config/firebase";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";
import {UserContext} from "../context/userContext"
import unAuth from "../assets/401.png"



function BitcoinPage() {  

  const x =useMemo(()=>[],[]);
  const y= useMemo(()=>[],[]);
  let currPrice = 43720;
  const formatDate = (res) => {
    let time = new Date(res).toLocaleTimeString([]);
    return time;
  };
  const {user} = useContext(UserContext)
  useEffect(() => {
      async function fetchBitcoinPrice(){
        const q = query(collection(db, "bitcoin-prices"),orderBy("time","desc"),limit(100));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          y.push(data.price);
          x.push(formatDate(data.time));
        })
       
      }
      fetchBitcoinPrice();
   }, [x,y]);
   
  

  const data = {
    labels: x,
    datasets: [
      {
        label: "Price of Bitcoin",
        data: y,
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
          <h5>USD value: $ {currPrice}</h5>
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
