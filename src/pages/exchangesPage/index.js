import Exchanges from "../../components/exchanges";
import MainLayout from "../../components/layouts/mainLayout";
import MarketHeader from '../../components/marketHeader'

export default function ExchangesPage(){
    return(
        <MainLayout>
            <MarketHeader/>
            <Exchanges/>
        </MainLayout>
    )
}