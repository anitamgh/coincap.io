import MainLayout from "../../components/layouts/mainLayout";
import MarketHeader from "../../components/marketHeader";
import CoinsList from "../../components/coinsList";

export default function HomePage(){
    return(
        <MainLayout>
            <MarketHeader/>
            <CoinsList/>
        </MainLayout>
    )
}