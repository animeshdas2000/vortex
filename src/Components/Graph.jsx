import React, { useEffect, useMemo, useState } from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { cryptoAPI } from '../services/axios';




function Graph({id,name}) {
    const [graphLabel,setGraphlabel]= useState([]);
    const [graphPrice,setGraphPrices] = useState([]);
    
    const x =useMemo(()=>[],[]);
    const y= useMemo(()=>[],[])

    useEffect(()=>{
        cryptoAPI.get(`/coins/${id}/market_chart?vs_currency=usd&days=1`)
            .then(res=>{
            // console.log(res.data.prices);
            let priceArr = res.data.prices;
            priceArr.forEach(price => {
                let time = new Date(price[0]).toLocaleTimeString([])
                x.push(time);
                
                y.push(price[1]);
             
            })
            setGraphlabel(x);
            setGraphPrices(y);
            })
            .catch(err=>console.error(err));
    },[id,x,y])

    const data = {
        
        labels: graphLabel,
        datasets: [{
            label: `Price of ${name}`,
            data: graphPrice,
            fill:true,
            backgroundColor: [
                '#272a38'
            ],
            borderColor: [
                '#ffffff',
            ],
            tension:0.5,
            borderWidth: 1
        }]
    }
  return (
    <div className='graph'>
        <Chart height="35vh" width="70vw" type='line' data={data} />
        </div>
  )
}

export default Graph