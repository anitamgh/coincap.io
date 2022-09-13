import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import {addZeros, separateWithComma, shortening} from "../../utils/fixNum";
import LoadingAnimation from "../loadingAnimation";

export default function CoinsList(){

    const [list , setList] = useState([])
    const [loading , setLoading] = useState(false)
    const [offset , setOffset] = useState(20)
    const {name} = useParams()
    useEffect(function(){
        getApi()
    } , [])
    async function getApi(){
        setLoading(true)
        const response = await api.get('/assets' ,{params: { limit: 20}})
        setList(response.data.data)
        setLoading(false)
    }
    async function viewMore(){
        setOffset(offset + 10)
        const response = await api.get('/assets' ,{params: { limit:10 , offset: offset}})
        setList(current => [...current , ...response.data.data])
    }
    function renderRows(){
        return list.map(function({id, rank, name, symbol, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr}){
            return(
                <tr key={rank}>
                    <td>{rank}</td>
                    <td>
                        <div className="image">
                            <img alt={`${name} logo`} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}/>
                        </div>
                        <div className="info">
                            <Link to={`/assets/${id}`}>
                                <h3>{name}</h3>
                                <p>{symbol}</p>
                            </Link>
                        </div>
                    </td>
                    <td>${separateWithComma(addZeros( (Math.round(priceUsd * 100) / 100) ))}</td>
                    <td>${separateWithComma(shortening(Math.round(marketCapUsd * 100) / 100))}</td>
                    <td>${separateWithComma(shortening(Math.round(vwap24Hr * 100) / 100))}</td>
                    <td>{separateWithComma(shortening(Math.round(supply * 100) / 100))}</td>
                    <td>${separateWithComma(shortening(Math.round(volumeUsd24Hr * 100) / 100))}</td>
                    <td style={{color: changePercent24Hr > 0 ? "rgb(24, 198, 131)" : "rgb(244, 67, 54)"}}>{addZeros( Math.round(changePercent24Hr * 100) / 100 )}%</td>
                </tr>
            )
        })
    }
    return(
        <Style>
            {loading === true ? <div className="loadingDiv"><LoadingAnimation size="8px"/></div> :
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Market Cap</th>
                                <th>VWAR (24Hr)</th>
                                <th>Supply</th>
                                <th>Volume (24Hr)</th>
                                <th>Change(24Hr)</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                    <button onClick={viewMore}>View More</button>
                </div>    
            }
        </Style>
    )
}