import Style from "./style";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, Title , Tooltip, LineElement , Legend , CategoryScale , LinearScale , PointElement, Filler} from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import LoadingAnimation from '../loadingAnimation';
import { Fragment } from "react";
import moment from "moment";
import InfoOfDay from "../infoOfDay";

ChartJS.register(
    Title , Tooltip, LineElement , Legend , CategoryScale , LinearScale , PointElement , Filler
)

export default function HistoryChart({change , coinData , history}){
    const {name} = useParams()
    const [coinHistory , setCoinHistory] = useState([])
    const [loading , setLoading] = useState(false)
    const [showInfo , setShowInfo] = useState(false)
    const [interval , setInterval] = useState('m1')
    const bgColor = []
    const borderColor = []

    if(showInfo === true){
        const lastChild = coinHistory.length -1
        var changePercent = (coinHistory[lastChild].priceUsd - coinHistory[0].priceUsd) / coinHistory[0].priceUsd * 100
    }

    if(changePercent >= 0){
        bgColor.push("rgba(24, 198, 131, 0.15)")
        borderColor.push("rgba(24, 198, 131, 0.7)")
    } else{
        bgColor.push('rgba(239, 154, 154 , 0.5)')
        borderColor.push("red")
    }
    const data= {
        labels:coinHistory.map(item => fixTime(item.time)),
        datasets:[
            {
                label:"!",
                data:coinHistory.map(item => item.priceUsd),
                backgroundColor:bgColor,
                borderColor:borderColor,
                tension:0,
                fill:true,
            }
        ]
    }
    const options = {
        responsive : true,
            elements: {
                point:{
                    radius: 0
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                }
            }
    }
    useEffect(() => {getApi()} , [interval])
    async function getApi(){
        const response = await api.get(`/assets/${name}/history?interval=${interval}`)
        setCoinHistory(response.data.data)
        setLoading(false)
        setShowInfo(true)
    }


    function fixTime(inputNum){
        if(interval === "m1" || interval === "m15"){
            const hour = moment(inputNum).hour()
            if(hour > 12){
                return(`${hour - 12} PM`)
            } else if(hour === 0){
                return(`12 AM`)
            } else{
                return(`${hour} AM`)
            }
        } else if(interval === "h1" || interval === "h2" || interval === "h12"){
            return moment(inputNum).format("MMM DD") 
        } else if(interval === "d1"){
            return moment(inputNum).format("MMM YYYY") 
        }
    }
    
    return(
        <>
        {showInfo === false ? <Fragment/> : 
        <InfoOfDay changePercent={changePercent} data={coinData} history={history} coinHistoryAsArray={coinHistory}/>
        }
        <Style>
            {loading ? <div style={{minHeight: 200 , margin: '15 0'}}><LoadingAnimation size="8px"/></div> :
                <>
                    {showInfo === false ? <Fragment/> : 
                    <>
                        <Line
                            data={data}
                            options={options}
                            style={{width: '740px', height: '370px'}}
                            height={350}
                            width={700}
                        />
                        <div className="interval">
                            <span onClick={() => setInterval('m1')}>1D</span>
                            <span onClick={() => setInterval('m15')}>1W</span>
                            <span onClick={() => setInterval('h1')}>1M</span>
                            <span onClick={() => setInterval('h2')}>3M</span>
                            <span onClick={() => setInterval('h12')}>6M</span>
                            <span onClick={() => setInterval('d1')}>1Y</span>
                        </div>
                    </>
                    }
                </>
            }
        </Style>
        </>
    )
}