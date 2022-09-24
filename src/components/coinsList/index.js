import Style from "./style";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import {addZeros, separateWithComma, shortening} from "../../utils/fixNum";
import LoadingAnimation from "../loadingAnimation";
import { findIndex } from "lodash";

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
    function sortRank(){
        if(list[0].rank === '1'){
        setList([...list].sort(({rank : a} , {rank : b}) => b-a))
        } else if(list[0].rank === String(list.length)){
            setList([...list].sort(({rank : a} , {rank : b}) => a-b))        
        } else if(list[0].rank !== String(list.length) && list[0].rank !== '1'){
            setList([...list].sort(({rank : a} , {rank : b}) => a-b))
        }
        }  
    function sortName(){
        if(list[0].rank === '1'){
        setList([...list].sort((a, b) =>
        a.name > b.name ? 1 : -1,
        ))
        }
        else if(list[0].rank !== '1'){
            setList([...list].sort((a, b) =>
            a.name > b.name ? -1 : 1,
            ))
        }
    }
    function sortPrice(){
        if(list[0].rank !== '1'){
            setList([...list].sort(({priceUsd : a} , {priceUsd : b}) => a-b))
        } else{
            setList([...list].sort(({priceUsd : a} , {priceUsd : b}) => b-a))           
        }
    }
    function sortVWAR(){
        if(list[0].rank !== '1'){
            setList([...list].sort(({vwap24Hr : a} , {vwap24Hr : b}) => a-b))
        } else{
            setList([...list].sort(({vwap24Hr : a} , {vwap24Hr : b}) => b-a))           
        }
    }
    function sortChangePercent(){
        if(list[0].rank !== '1'){
            setList([...list].sort(({changePercent24Hr : a} , {changePercent24Hr : b}) => a-b))
        } else{
            setList([...list].sort(({changePercent24Hr : a} , {changePercent24Hr : b}) => b-a))           
        }
    }
    function sortSupply(){
        if(list[0].rank !== '1'){
            setList([...list].sort(({supply : a} , {supply : b}) => a-b))
        } else{
            setList([...list].sort(({supply : a} , {supply : b}) => b-a))           
        }
    }
    function sortVolume(){
        if(list[0].rank !== '1'){
            setList([...list].sort(({volumeUsd24Hr : a} , {volumeUsd24Hr : b}) => a-b))
        } else{
            setList([...list].sort(({volumeUsd24Hr : a} , {volumeUsd24Hr : b}) => b-a))           
        }
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
                                <th onClick={sortRank}>Rank</th>
                                <th onClick={sortName}>Name</th>
                                <th onClick={sortPrice}>price</th>
                                <th onClick={sortRank}>Market Cap</th>
                                <th onClick={sortVWAR}>VWAR (24Hr)</th>
                                <th onClick={sortSupply}>Supply</th>
                                <th onClick={sortVolume}>Volume (24Hr)</th>
                                <th onClick={sortChangePercent}>Change(24Hr)</th>
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