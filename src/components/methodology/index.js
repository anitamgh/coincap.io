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
                    <h1>Crypto Market Vs. Traditional Market</h1>
                    <div className="chartWrapper">
                        <ul>
                            <li>
                                <h2>Cryptocurrency Market</h2>
                            </li>
                            <li>
                                <p className="pros">Constant activity, no open or close of trading</p>
                            </li>
                            <li>
                                <p className="pros">Assets are sold across many exchanges</p>
                            </li>
                            <li>
                                <p className="pros">Digital assets can be purchased with a variety of methods, including fiat currency and cryptocurrency</p>
                            </li>
                            <li>
                                <p className="pros">Less standardization on how exchanges operate</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>Traditional Market</h2>
                            </li>
                            <li>
                                <p className="pros">Trading floor opens and closes; not available on nights and weekends</p>
                            </li>
                            <li>
                                <p className="pros">Commodities only available to purchase from select exchanges</p>
                            </li>
                            <li>
                                <p className="pros">Purchasing options limited to fiat</p>
                            </li>
                            <li>
                                <p className="pros">Exchange operations are highly regulated with many standards</p>
                            </li>
                        </ul>
                    </div>
                    <p className="footerText"><span>By aggregating exchange data from around the world, we provide fast calculations with controls to detect and remove outliers.</span> This ensures that you're always seeing the prices that best represent the global market 'as-is.'</p>
                    <p className="footerText">Continue reading to learn more about how price is calculated, how outliers are detected, and other mechanics that contribute to data represented on CoinCap.</p>
                </div>
            </div>
            <div className="pricingMethodology">
                <div className="container">
                    <div className="contentWrapper">
                        <div className="info">
                            <h1>CoinCap Pricing Methodology</h1>
                            <p>To calculate price, CoinCap reviews the data from markets where that asset is either the base or quote in a trade. Any time a digital asset is bought or sold, it contributes to the CoinCap price evaluation.</p>
                            <p>Our system evaluates every unit equally. The amount of volume handled by an exchange weighs on the exchange's level of contribution to the market-wide price.</p>
                            <p>For example, if an exchange transacts 2,000 units of a coin in a day and another exchange transacts 1,000 units of that coin, the first exchange will have twice the influence on the global price as the other exchange.</p>
                        </div>
                        <img src="assets/images/methodology.png"/>
                    </div>
                    <div className="marketPrice">
                        <div>
                            <p><b>SUM</b> (Price <b>x</b> Volume on exchange)</p>
                            <hr></hr>
                            <p>Total volume of digital asset traded</p>
                        </div>
                        <div>
                            <p>=</p>
                        </div>
                        <div>
                            <p>GLOBAL</p>
                            <p>MARKET</p>
                            <p>PRICE</p>
                        </div>
                    </div>
                    <div className="sectionFooter">
                        <p>The pricing conversation often leads to discussions on volume and whether or not some exchange’s claimed volume can be verified. The CoinCap team is aware and monitoring these conversations, but to date, no action has been taken to adjust influence of exchanges. Outlier detection prevents any single exchange from moving the global price in a manner that is inconsistent with the market.</p>
                        <p>As mentioned above, CoinCap pricing is an aggregate of data from exchanges around the world. CoinCap recognizes that it does not currently collect data from all sources of cryptocurrency trading. In order to add more exchanges to CoinCap, our development team must be able to work with that exchange’s API to properly gather data. CoinCap’s team of developers will continue to incorporate more exchanges into our pricing model.</p>
                        <p style={{textAlign: 'center'}}>To request exchanges to be added, please visit our <a href="https://coincap.zendesk.com/hc/en-us/restricted?return_to=https%3A%2F%2Fcoincap.zendesk.com%2Fhc%2Fen-us&locale=en-us">Help Desk</a> and submit a request <a href="https://coincap.zendesk.com/hc/en-us/restricted?return_to=https%3A%2F%2Fcoincap.zendesk.com%2Fhc%2Fen-us%2Frequests%2Fnew&locale=en-us">here</a>.</p>
                    </div>
                </div>
            </div>
            <div className="outlierDetection">
                <div className="container">
                    <div className="introWrapper">
                        <div>
                            <h1>CoinCap Outlier Detection</h1>
                            <p>There are times when CoinCap will receive data that can immediately be identified as flawed or outside the range of acceptance. To protect the integrity of our data, we identify flawed data and do not allow it to contribute to CoinCap’s calculations. The following are the security measures put in place to protect the integrity of our data:</p>
                        </div>
                        <div>
                            <img src="assets/images/detection.png"/>
                        </div>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                <div className="number">
                                    <p>1</p>
                                </div>
                                <div className="description">
                                    <p>Price Outlier Detection</p>
                                    <p>As CoinCap receives trade price data from exchanges, our system compares the exchange's price to the real-time global price of that asset. If the price is more than 10 percent outside (above or below) the current global price, the data is flagged as an outlier. This does not prevent the price of an asset from rapidly gaining or losing value. Prices will climb and fall incrementally on markets as fulfilled orders move prices. CoinCap accepts incremental price movements. The 10 percent outlier detection prohibits a single exchange from falsely reporting a price far above or below the real-time market. These outlier prices will appear on the website with notation, but will not be used in the global price calculation on the digital asset.</p>
                                </div>
                            </li>
                            <li>
                                <div className="number">
                                    <p>2</p>
                                </div>
                                <div className="description">
                                    <p>Aged Data Handling</p>
                                    <p>To have real-time information available, our system is constantly requesting the most up-to-date trade data from exchanges. Exchanges respond with data that is timestamped to show recency. At times, an exchange will send trade data that does not have a recent timestamp. Our system looks at the timestamp of every response to check if it is recent. Any trade data received with a timestamp more than four hours old will be identified as aged data. This aged data will appear on the website with notation, but will not be used in the global price calculation of the asset.</p>
                                </div>
                            </li>
                            <li>
                                <div className="number">
                                    <p>3</p>
                                </div>
                                <div className="description">
                                    <p>New Markets</p>
                                    <p>All new exchanges or new markets on existing exchanges are inspected and verified as accurate before the data is incorporated into CoinCap’s pricing. This is done to ensure that all markets represented on CoinCap truly exist and users can confidently take action on the accurate and verified information provided by our site.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="rank">
                <div className="container">
                    <div className="topSection">
                        <div className="text">
                            <h1>CoinCap Rank</h1>
                            <p>To identify the top digital assets, CoinCap has determined a ranking system based on three factors: Daily Trading Volume, Availability, and Market Cap.</p>
                            <ul>
                                <li>Daily Trading Volume represents a measure called liquidity, or the extent to which the asset can be bought or sold without much risk of moving the price. Assets with high liquidity are easier to buy and sell in the marketplace, therefore we believe daily trading volume must contribute to rank.</li>
                                <li>Asset Availability relates to how many exchanges trade this asset. When multiple exchanges offer a digital asset, it serves as a reference point for price, which helps ensure that the data you are seeing is valid. This prevents a single exchange from reporting a price that is not an accurate representation of the market.</li>
                                <li>Market Cap is the price multiplied by supply of an asset. This metric helps in understanding the total value if all available assets are purchased.</li>
                            </ul>
                        </div>
                        <div className="image">
                            <img src="assets/images/CCRank.png"/>
                        </div>
                    </div>
                    <div className="middleSection">
                        <img src="assets/images/pyramid.png"/>
                        <ul>
                            <li>Tier A is our top tier of assets by rank. This tier represents about 25 percent of assets listed on CoinCap. "A Tier" assets must have a daily trading volume of more than $100,000 (USD value) and must be listed on more than one exchange. After these criteria are met, assets are ranked by market cap.</li>
                            <li>Tier B is our middle tier of assets by rank and also represents about 25 percent of assets listed on CoinCap. "B Tier" assets may have a daily trading volume of more than $100,000 (USD) value but only on one exchange. Assets classified as B Tier might also have a daily trading volume between $10,000-$1000,000 (USD value). Assets that meet either of these criteria are then ranked by market cap.</li>
                            <li>Tier C is our bottom tier of assets by rank and represents about 50 percent of assets listed on CoinCap. "C Tier" assets have a daily trading volume of less than $10,000 (USD value). After this criteria is met, assets are ranked by market cap. Roughly 50 percent of CoinCap assets fall into this category. Assets with unknown supply, and therefore unknown market cap, will fall to the end of this list.</li>
                        </ul>
                    </div>
                    <div className="bottomSection">
                        <h1>Market Capitalization</h1>
                        <p>CoinCap’s Market Cap statistic is by definition a Free-Float Market Capitalization (price multiplied by supply, where the supply is the total number of assets readily available in the market). This statistic differs from standard market capitalization where all assets are considered, even if these assets are distributed in a way that a portion are inaccessible to buyers (held by founders, created but locked away until a particular date, etc).</p>
                        <p>Free-Float Methodology is a term that has been used to apply to traditional markets. CoinCap believes this way of calculating market cap does not meet the needs of every cryptocurrency available today. Assets vary in how they are purchased, held, and used. Interesting edge-cases appear where assets may be staked in a contract to fulfill their purpose or “burnt” upon using. With the large number of assets, regular entrance of new assets to the market, and variety of uses of these assets, perhaps market capitalization is a flawed metric used to compare cryptocurrencies.</p>
                        <p>At CoinCap, we often question whether or not traditional metrics meet current needs for the industry. For this reason, market cap is only one of three factors that contributes to CoinCap’s Rank. Alternatives to market capitalization (free-float or otherwise) are being explored by the CoinCap team.</p>
                    </div>
                </div>
            </div>
        </Style>
    )
}