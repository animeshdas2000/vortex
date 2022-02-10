import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Graph from "../Components/Graph";
import { cryptoAPI } from "../services/axios";
import {UserContext} from "../context/userContext"
import unAuth from "../assets/401.png"
function CoinPage() {
  let params = useParams();
  const id = params.symbl;
  const {user} = useContext(UserContext)
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
      {!user?(
        <div style={{textAlign:"center"}}>
          <h1>Please Login</h1>
          <img src={unAuth}  width="40%" alt="" />
          
        </div>
      ):(<div>
        
          <div className="card">
            <div className="img">
              <img src={coin.coinImg.large} width="70%" alt="" />
            </div>
            <div className="right">
              <h1>
                {coin.name} ({coin.symbol})
              </h1>
              <h5>USD value: ${coin.coinPrice} </h5>
              <h5>Mkt. Cap: ${coin.mktCap} </h5>
            </div>
        
          </div>
          {/* <code>*If the graph is not visible reload the page</code> */}
          <Graph id={id} name={coin.name}/>
      </div>
      )}
        
      </>
    );
  
}

export default CoinPage;
