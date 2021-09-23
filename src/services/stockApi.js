import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const stockApiHeaders ={
    'url': 'alphavantage.co',
    'key': process.env.API_KEY
}
const baseUrl = 'https://www.alphavantage.co';


const createRequest = (url) => ({url,headers:stockApiHeaders})
export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getStocks: builder.query({
            query: ()=> createRequest(`/function=LISTING_STATUS`)
        })
    })
})

export const{
    useGetStockQuery,
} = stockApi;