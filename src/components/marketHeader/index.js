import Style from "./style"
export default function MarketHeader(){
    return(
        <Style>
            <div className="container">
                <ul>
                    <li>
                        <h2>MARKET CAP</h2>
                        <p>$1.05T</p>
                    </li>
                    <li>
                        <h2>EXCHANGE VOL</h2>
                        <p>$49.60B</p>
                    </li>
                    <li>
                        <h2>ASSETS</h2>
                        <p>2,295</p>
                    </li>
                    <li>
                        <h2>EXCHANGES</h2>
                        <p>73</p>
                    </li>
                    <li>
                        <h2>MARKETS</h2>
                        <p>12,948</p>
                    </li>
                    <li>
                        <h2>BTC DOM INDEX</h2>
                        <p>36.3%</p>
                    </li>
                </ul>
            </div>
        </Style>
    )
}