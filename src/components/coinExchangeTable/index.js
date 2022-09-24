import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Style from "./style";
import { shortening , separateWithComma } from "../../utils/fixNum";
import { Fragment } from "react";
export default function CoinExchangeTable(){
    const [loading , setLoading] = useState(false)
    const [tableData , setTableData] = useState([])
    const [offset , setOffset] = useState(10)
    const [showButton , setShowButton] = useState(true)
    const {name} = useParams(null)
    useEffect(() => {
        getApi()
    } , [])
    async function getApi(){
        setLoading(true)
        const response = await api.get(`/assets/${name}/markets` , {params: {limit: 10}})
        setTableData(response.data.data)
        setLoading(false)
    }
    async function viewMore(){
        setOffset(offset + 10)
        const response = await api.get(`/assets/${name}/markets` ,{params: {limit: 10 , offset: offset}})
        setTableData(current => [...current , ...response.data.data])
        if(response.data.data.length < 10){
            setShowButton(false)
        }
    }
    
    const render = () => {
        return tableData.map(({exchangeId , baseId , quoteId , baseSymbol , quoteSymbol , volumeUsd24Hr , priceUsd , volumePercent} , index) => {
            return(
                <tr key={index}>
                    <td>{exchangeId}</td>
                    <td>{baseSymbol}/{quoteSymbol}</td>
                    <td>${separateWithComma(shortening(Math.round(priceUsd * 100) / 100))}</td>
                    <td>${separateWithComma(Math.round(volumeUsd24Hr * 100) / 100)}</td>
                    <td>{shortening(Math.round(volumePercent * 100) / 100)}%</td>
                    <td></td>
                </tr>
            )
        })
    }
    return(
        <Style>
            <table>
                <thead>
                    <tr>
                        <th>Exchange</th>
                        <th>Pair</th>
                        <th>Price</th>
                        <th>Volume (24Hr)</th>
                        <th>Volume (%)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>{render()}</tbody>
            </table>
            {showButton === false ? <Fragment/> :
            <button onClick={viewMore}>View More</button>
            }
        </Style>
    )
}