import Style from "./style";

export default function SwapBox(){
    return(
        <Style>
            <div className="swapBox">
                <div className="swapAndGear">
                    <h1>Swap</h1>
                    <img src="/assets/images/gear-solid.svg"/>
                </div>
                <div className="sellBox">
                    <div className="sell">
                        <p>You Sell</p>
                        <p>0</p>
                    </div>
                    <div className="tokenToSell">
                        <img src="https://assets.coincap.io/assets/icons/eth@2x.png"/>
                        <h1>ETH</h1>
                        <img className="angleDown" src="/assets/images/angle-down-solid.svg"/>
                    </div>
                </div>
                <div className="shuffleImage">
                    <img src="/assets/images/shuffle.svg"/>
                </div>
                <div className="getBox">
                    <div className="get">
                        <p>You Get</p>
                        <p>0</p>
                    </div>
                    <div className="tokenToGet">
                        <h1>Select a token</h1>
                        <img className="angleDown" src="/assets/images/angle-down-solid.svg"/>
                    </div>
                </div>
                <div className="connectWallet">Connect Wallet</div>
            </div>
        </Style>
    )
}