import Style from "./style"
import { addZeros , separateWithComma , shortening } from "../../utils/fixNum"
import {useRef , useEffect} from 'react'
import { useState } from "react"
import api from "../../utils/api"
import LoadingAnimation from "../loadingAnimation"
import HistoryChart from "../historyChart"
import { Fragment } from "react"
import CoinExchangeTable from "../coinExchangeTable"
import SwapBox from "../swapBox"

export default function CoinInfo({data}){
    const caretIcon = useRef(null)
    const caretIconEl = caretIcon.current
    const [loading , setLoading] = useState(false)
    const [historyData , setHistoryData] = useState([])
    const [historyArrayData , setHistoryArrayData] = useState([])
    const [showInfo , setShowInfo] = useState(false)
    const {id, rank, name, symbol, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr} = data
    useEffect(() => {
        if (caretIconEl !== null){
            caretChange()
        }
        getApi()
    } , [])

    async function getApi(){
        setLoading(true)
        const response = await api.get(`/assets/${id}/history?interval=d1`)
        setHistoryData(response.data)
        setHistoryArrayData(response.data.data)
        setLoading(false)
        setShowInfo(true)
    }
    function caretChange(){
        if(changePercent24Hr > 0){
            console.log(caretIconEl)
            // caretIconEl.classList.remove("negative")
            // caretIconEl.classList.add("positive")
        } else{
            console.log(caretIconEl)
            // caretIconEl.classList.remove("positive")
            // caretIconEl.classList.add("negative")
        }
    }
    
    return(
        <Style>
            {loading ? <div style={{minHeight: 200 , margin: '15 0'}}><LoadingAnimation size="8px"/></div> :
            <div className="coinInfoHeader">
                <div className="container">
                    <div className="flexWrapper">
                    <div className="leftCol">
                        <div className="col rank">
                            <h1>{rank}</h1>
                            <p>RANK</p>
                        </div>
                        <div className="col price">
                            <h1>{name} ({symbol})</h1>
                            <h2>${separateWithComma(addZeros( (Math.round(priceUsd * 100) / 100) ))}</h2>
                            <h3 style={{color: changePercent24Hr > 0 ? "rgb(24, 198, 131)" : "rgb(239, 154, 154)"}}>{addZeros( Math.round(changePercent24Hr * 100) / 100 )}%</h3>
                            <svg ref={caretIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
                        </div>
                    </div>
                    <div className="rightCol">
                        <div className="col marketCap">
                            <p>Market Cap</p>
                            <h4>${separateWithComma(shortening(Math.round(marketCapUsd * 100) / 100))}</h4>
                            <a href="https://coincap.org/"><button>Website</button></a>
                        </div>
                        <div className="col volume">
                            <p>Volume (24Hr)</p>
                            <h4>${separateWithComma(shortening(Math.round(volumeUsd24Hr * 100) / 100))}</h4>
                            <a href="https://blockchain.info/"><button>Explorer</button></a>
                        </div>
                        <div className="col supply">
                            <p>Supply</p>
                            <h4>{separateWithComma(shortening(Math.round(supply * 100) / 100))} {symbol}</h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="heroSection">
                    <div className="container">
                        {showInfo === false ? <Fragment/> :
                            <div className="flexWrapper">
                                <HistoryChart history={historyData} coinData={data} change={changePercent24Hr}/>
                                <SwapBox/>
                            </div>
                        }
                    </div>
                </div>
                <div className="exchangeTable">
                    <div className="container">
                    {showInfo === false ? <Fragment/> :
                        <>
                           <CoinExchangeTable/>     
                        </>
                    }
                    </div>
                </div>
            </div>
            }
        </Style>
    )
}