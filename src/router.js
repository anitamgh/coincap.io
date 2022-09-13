import {Route , Routes , BrowserRouter} from 'react-router-dom'
import CoinInfoPage from './pages/coinInfoPage'
import HomePage from './pages/homePage'
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage/>} path="/" />
                <Route element={<CoinInfoPage/>} path="/assets/:name" />
            </Routes>
        </BrowserRouter>
    )
}