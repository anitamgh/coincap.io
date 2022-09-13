import Style from "./style";
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, Title , Tooltip, LineElement , Legend , CategoryScale , LinearScale , PointElement} from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../utils/api";
import { useParams } from "react-router-dom";
import LoadingAnimation from '../loadingAnimation';
import { Fragment } from "react";

ChartJS.register(
    Title , Tooltip, LineElement , Legend , CategoryScale , LinearScale , PointElement
)

export default function HistoryChart({change}){
    const {name} = useParams()
    const [coinHistory , setCoinHistory] = useState([])
    const [loading , setLoading] = useState(false)
    const [showInfo , setShowInfo] = useState(false)
    const [interval , setInterval] = useState('d1')
    const data= {
        labels:coinHistory.map(item => item.time),
        // labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets:[
            {
                label:"!",
                data:coinHistory.map(item => item.priceUsd),
                // data:[354,4578,345,568,709,34],
                backgroundColor:'#fff',
                borderColor:'#000',
                tension:0
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
    }
    useEffect(() => {getApi()} , [])
    async function getApi(){
        const response = await api.get(`/assets/${name}/history?interval=${interval}`)
        setCoinHistory(response.data.data)
        setLoading(false)
        setShowInfo(true)
    }
    return(
        <Style>
            {loading ? <div style={{minHeight: 200 , margin: '15 0'}}><LoadingAnimation size="8px"/></div> :
                <>
                    {showInfo === false ? <Fragment/> : 
                    <Line
                        data={data}
                        options={options}
                        style={{width: '1000px', height: '600px'}}
                        height={600}
                        width={1000}
                    />
                    }
                </>
            }
        </Style>
    )
}