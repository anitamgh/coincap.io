import Style from "./style";

export default function Methodology(){
    return(
        <Style>
            <div className="headerBar">
                <div className="container">
                    <ul>
                        <li>Market Breakdown</li>
                        <li>Methodology</li>
                        <li>Outlier Detection</li>
                        <li>CoinCap Rank</li>
                    </ul>
                </div>
            </div>
            <div className="welcoming">
                <div className="container">
                    <h1>Welcome to CoinCap, your reliable source for cryptocurrency market data</h1>
                </div>
            </div>
            <div className="overview">
                <div className="container">
                    <div className="overviewWrapper">
                        <img src="/assets/images/laptop.png"/>
                        <p>CoinCap's goal is to give you the most real-time view of cryptocurrency trading taking place around the world. Built to meet the needs of cryptocurrency enthusiasts, CoinCap adapts to the unique demands of cryptocurrency markets.</p>
                    </div>
                </div>
            </div>
            <div className="comparison">
                <div className="container">
                    
                </div>
            </div>
        </Style>
    )
}