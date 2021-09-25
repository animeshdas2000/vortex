import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {baseCryptoURL} from "../../config"
import Crypto from '../Crypto';

function Content(){
  const [coins,setCoins] = useState([])
useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets',{
       params:{
        vs_currency:"usd",
        order:"market_cap_desc",
        per_page:100,
        page:1,
        sparkline:false,
       }
    })
        .then(res=>{
            setCoins(res.data);
            
        })
        .catch(err=>{
            console.log(err);
        })
    })
  
    const contentStyle={"marginLeft":"15%","padding":"5%"}
    return(
        <div style={contentStyle}> 
            <p>{coins.map(coins=>{
                return(
                    <Crypto id={coins.id} symbol={coins.symbol} name={coins.name} cprice={coins.current_price} />
                )
            })}</p>
            </div>
    )
}

export default Content
