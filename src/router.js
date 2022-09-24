import {Route , Routes , BrowserRouter} from 'react-router-dom'
import CoinInfoPage from './pages/coinInfoPage'
import HomePage from './pages/homePage'
import SwapPage from './pages/swapPage'
import ExchangesPage from './pages/exchangesPage'
import MethodologyPage from './pages/methodology'
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage/>} path="/" />
                <Route element={<CoinInfoPage/>} path="/assets/:name" />
                <Route element={<SwapPage/>} path="/swap"/>
                <Route element={<ExchangesPage/>} path="/exchanges"/>
                <Route element={<MethodologyPage/>} path="/methodology"/>
            </Routes>
        </BrowserRouter>
    )
}