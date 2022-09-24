import moment from "moment/moment"
import Style from "./style"
import { separateWithComma , shortening} from "../../utils/fixNum"

export default function InfoOfDay({data , history , coinHistoryAsArray , changePercent}){
    const {symbol , name} = data
    const {timestamp} = history

    const highPrice = coinHistoryAsArray.reduce(
        (prev, current) => {
          return prev.priceUsd > current.priceUsd ? prev : current
        }
      );
    const lowPrice = coinHistoryAsArray.reduce(
        (prev, current) => {
            return prev.priceUsd < current.priceUsd ? prev : current
        }
    )
    const priceFromArray  = coinHistoryAsArray.map(item => Number(item.priceUsd))
    let sum = priceFromArray.reduce((a, b) => a + b, 0)
    const average = sum/(coinHistoryAsArray.length)
    
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
                    <div className="high box">
                        <h2>HIGH </h2>
                        <span>{` ${separateWithComma(shortening(Math.round(highPrice.priceUsd * 100) / 100))}`}</span>
                    </div>
                    <div className="low box">
                        <h2>LOW </h2>
                        <span>{` ${separateWithComma(shortening(Math.round(lowPrice.priceUsd * 100) / 100))}`}</span>
                    </div>
                </div>
                <div className="col">
                    <div className="average box">
                        <h2>AVERAGE </h2>
                        <span>{`${separateWithComma(shortening(Math.round(average * 100) / 100))}`}</span>
                    </div>
                    <div className="change box">
                    <h2>CHANGE </h2>
                    <span style={{color: changePercent > 0 ? "rgb(24,198,131)" : "rgb(239, 154, 154"}}>{`${separateWithComma(shortening(Math.round(changePercent * 100) / 100))}`}%</span>
                    </div>
                </div>
            </div>
        </Style>
    )
}