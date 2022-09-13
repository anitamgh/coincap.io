import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../../components/coinInfo";
import MainLayout from "../../components/layouts/mainLayout";
import LoadingAnimation from "../../components/loadingAnimation";
import api from "../../utils/api";

export default function CoinInfoPage(){
    const {name} = useParams()
    const [loading , setLoading] = useState(false)
    const [data , setData] = useState([])
    useEffect(function(){
        getApi()
    } , [])
    async function getApi(){
        setLoading(true)
        const response = await api.get(`/assets/${name}`)
        setData(response.data.data)
        setLoading(false)
    }

    return(
        <MainLayout>
            {loading ? <div style={{minHeight: 200 , margin: '15 0'}}><LoadingAnimation size="8px"/></div> :
                <CoinInfo data={data}/>
            }
        </MainLayout>
    )
}