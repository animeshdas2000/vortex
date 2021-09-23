import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {baseURL} from "../../config"
import { useGetStockQuery } from '../../services/stockApi';
// var options = {
//     method: 'GET',
//     url: baseURL,
//     params: {function: 'SYMBOL_SEARCH', keywords: 'microsoft', datatype: 'json'},
   
//   };
function Content(){
    // const [stock,setStock]=useState(null);
    // useEffect(()=>{
    //     axios.request(options)
    //         .then((res)=>{
    //             console.log(res.data);
    //         });
    // },[]);

    const { data,isFetching }=useGetStockQuery();
    console.log(data);
    return(
        <div>API</div>
    )
}

export default Content
