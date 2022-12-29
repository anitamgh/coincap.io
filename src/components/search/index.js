import {Link} from 'react-router-dom'
import Style from './style'

export default function Search({data}){
    function renderItems(){
        return data.map(function({id , name , symbol}){
            return(
                <li key={name}>
                    <Link to={`/assets/${id}`}>
                        <span>{name}</span>
                        <span>({symbol})</span>
                    </Link>
                </li>
            )
        })
    }
    return(
        <Style>
                <ul>{renderItems()}</ul>
        </Style>
    )
}