import moment from "moment/moment"
import Style from "./style"

export default function InfoOfDay({data , history , historyAsArray}){
    // console.log(history)
    const {symbol , name} = data
    const {timestamp} = history
    // const {priceUsd , time} = historyAsArray 

    // const highPrice = historyAsArray.reduce()
    
    return(
        <Style>
            <div className="left">
                <div className="col">
                <img alt={`${name} logo`} src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}/>
                </div>
                <div className="col">
                    <h1>{name} ({symbol})</h1>
                    <p>{moment(timestamp).format('DD MMMM YYYY')}</p>
                </div>
            </div>
            <div className="right">
                <div className="col">
                    <h2>HIGH</h2>
                    <h2>LOW</h2>
                </div>
                <div className="col">
                    <h2>AVERAGE</h2>
                    <h2>CHANGE</h2>
                </div>
            </div>
        </Style>
    )
}