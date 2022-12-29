import { Fragment, useEffect } from "react";
import { useState } from "react";
import api from "../../utils/api";
import LoadingAnimation from "../loadingAnimation";
import Style from "./style";
import {shortening} from '../../utils/fixNum'

export default function Exchanges(){
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [offset , setOffset] = useState(20)
    const [showButton , setShowButton] = useState(true)
    useEffect(() => {
        getApi()
    } , [])
    async function getApi(){
        setLoading(true)
        const response = await api.get('/exchanges' , {params: {limit : 20 }})
        setData(response.data.data)
        setLoading(false)
    }
    async function viewMore(){
        setOffset(offset + 10)
        const response = await api.get('/exchanges' ,{params: { limit:10 , offset: offset}})
        setData(current => [...current , ...response.data.data])
        if(response.data.data < 10){
            setShowButton(false)
        }
        console.log([...data , ...response.data.data])
    }

    const renderRows = () => {
        return data.map(({rank , name , tradingPairs , volumeUsd , percentTotalVolume} , index) => {
            return(
                <tr key={index}>
                    <td>{rank}</td>
                    <td>{name}</td>
                    <td>{tradingPairs}</td>
                    <td>BTC/USTD</td>
                    <td>{volumeUsd !== null ? `${shortening(volumeUsd)}` : "-"}</td>
                    {tradingPairs === '0' ? <td>-</td> : <td>{Number(percentTotalVolume).toFixed(2)}</td>}
                    <td><div style={{backgroundColor: tradingPairs === "0" ? 'rgb(244, 67, 54)' : 'rgb(24, 198, 131)'}}></div></td>
                </tr>
            )
        })
    }
    return(
        <Style>
            {loading ? <div style={{minHeight: 200 , margin: '15 0'}}><LoadingAnimation size="8px"/></div> : 
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trading Pairs</th>
                            <th>Top Pair</th>
                            <th>Volume (24Hr)</th>
                            <th>Total (%)</th>
                            <th>Status</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
                {showButton === false ? <Fragment/> :
                    <button onClick={viewMore}>View More</button>
                }
            </div> 
            }
        </Style>
    )
}