import Style from "./style"
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <Style>
            <div className="container">
                <ul>
                    <li>
                        <h3>COINCAP.IO</h3>
                        <Link to="/methodology">
                            <p>Methodology</p>
                        </Link>
                        <a href="https://shapeshift.zendesk.com/hc/en-us/requests/new">
                            <p>Support</p>
                        </a>
                        <a href="https://docs.coincap.io/">
                            <p>Our API</p>
                        </a>
                        <Link to="/rate-compare">
                            <p>Rate Comparison</p>
                        </Link>
                        <a href="https://shapeshift.com/contribute">
                            <p>Careers</p>
                        </a>
                    </li>
                    <li>
                        <h3>LEGALS</h3>
                        <a href="https://assets.coincap.io/documents/terms_of_service.pdf">
                            <p>Terms of Service</p>
                        </a>
                        <a href="https://shapeshift.com/privacy">
                            <p>Privacy Policy</p>
                        </a>
                        <h3>DISCLAIMER</h3>
                        <p className="description">Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
                    </li>
                    <li>
                        <h3>FOLLOW US</h3>
                        <a href="https://twitter.com/CoinCap_io">
                            <img className="social" src="/assets/images/twitter.svg"/>
                        </a>
                        <a href="https://www.facebook.com/watch/?v=365220420785166">
                            <img className="social" src="/assets/images/square-facebook.svg"/>
                        </a>
                    </li>
                    <li>
                        <h3>COINCAP APP AVAILABLE ON</h3>
                        <a href="https://play.google.com/store/apps/details?id=io.coinCap.coinCap">
                            <img src="/assets/images/google-play-footer.svg"/>
                        </a>
                        <a href="https://itunes.apple.com/us/app/coincap/id1074052280?mt=8&ign-mpt=uo%3D4">
                            <img src="/assets/images/apple-store-footer.svg"/>
                        </a>
                    </li>
                </ul>
            </div>
        </Style>
    )
}