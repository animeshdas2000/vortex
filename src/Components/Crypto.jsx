import React from 'react'
import { Table, TBODY,THEAD,TROW } from './styledComp/table'

const THeadData=[
    {
        title:"Name",
    },
    {
        title:" Symbol",
    },
    
]
const Crypto = (props) => {
    return (
       <Table>
        <TROW>
            {THeadData.map((thd)=>{
                return(
                    <THEAD>{thd.title}</THEAD>
                )
            })}
        </TROW>
        <TROW>
            <TBODY>{props.id}</TBODY>
            <TBODY>{props.symbol}</TBODY>
            <TBODY>{props.name}</TBODY>
            <TBODY>{props.cprice}</TBODY>
            
        </TROW>
        
       </Table>
    )
}

export default Crypto
