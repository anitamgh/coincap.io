import { useRef , useState } from "react"
import { Link } from "react-router-dom"
import Search from "../../../search"
import Style from "./style"
import api from "../../../../utils/api"
import LoadingAnimation from "../../../loadingAnimation"


export default function Header(){
    const input = useRef(null)
    const altMenu = useRef(null)
    const [searchResult , setSearchResult] = useState([])
    const [loading , setLoading] = useState(false)
    const [showSearchResult , setShowSearchResult] = useState(true)
    function inputOnclick(){
        const inputElement = input.current
        inputElement.classList.toggle("clicked")
    }
    function showMenu(){
        const altMenuElement = altMenu.current
        altMenuElement.classList.toggle("show")
        window.addEventListener("resize" , function(){
            if(window.innerWidth >= 770){
                altMenuElement.classList.remove("show")
            }
        })
    }
    async function inputOnChange(event){
        setShowSearchResult(false)
        if(event.target.value !== ""){
            setShowSearchResult(true)
            setLoading(true)
            const response = await api.get('/assets' ,{params: { search: event.target.value}})
            setSearchResult(response.data.data)
            setLoading(false)
        } 
    }
    return(
        <Style>
            <div className="container">
                <div className="header">
                    <div className="left">
                        <Link to="/">
                            <div>Coins</div>
                        </Link>
                        <Link to="#">
                            <div>Exchanges</div>
                        </Link>
                        <Link to="#">
                            <div>Swap</div>
                        </Link>
                    </div>
                    <div className="center">
                        <Link to="/"><img src="/assets/images/coincap-header-logo.svg"/></Link>
                    </div>
                    <div className="right">
                        <div className="inputContainer">
                            <input ref={input} onChange={inputOnChange}  type="text"/>
                            {loading === true ? <div className="loading"><LoadingAnimation size="0.5px"/></div> :
                            loading === false && showSearchResult === true ? 
                            <> 
                            <Search data={searchResult}/> 
                            <img onClick={inputOnclick} src="/assets/images/magnifying-glass-solid.svg"/> 
                            </>
                            : loading === false ? <img onClick={inputOnclick} src="/assets/images/magnifying-glass-solid.svg"/> 
                            :
                            <></>
                            }
                        </div>
                        
                        {/* the 2 elements below are showed in a specific screen-width */}

                        <Link to="/"><img className="responsiveCoincapLogo" src="/assets/images/coincap-header-logo.svg"/></Link>
                        <img className="responsiveMenuBar" onClick={showMenu} src="/assets/images/bars-solid.svg"/>    
                        <div ref={altMenu} className="responsiveMenu">
                            
                            {/* this element is showed in a specific screen-width */}

                            <ul>
                                <li>
                                    <Link to="/">
                                        <img src="/assets/images/bitcoin.svg"/>
                                        <p>Coins</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/exchanges">
                                        <img src="/assets/images/arrow-right-arrow-left-solid.svg"/>
                                        <p>Exchanges</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/swap">
                                        <img src="/assets/images/shuffle-solid.svg"/>
                                        <p>Swap</p>
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://docs.coincap.io">
                                        <img src="/assets/images/newspaper-regular.svg"/>
                                        <p>API</p>
                                    </a>
                                </li>
                                <li>
                                    <img className="gearIcon" src="/assets/images/gear-solid.svg"/>
                                    <p>Settings</p>
                                </li>
                                <li>
                                    <button>Connect Wallet</button>
                                </li>
                                <li>
                                    <div className="input">
                                        <input placeholder="USD" type="text" />
                                        <img src='/assets/images/caret-down-solid.svg'/>
                                    </div>
                                    <div className="input">
                                        <input placeholder="English" type="text" />
                                        <img src='/assets/images/caret-down-solid.svg'/>
                                    </div>
                                </li>
                            </ul>
                        </div> 

                        <img className="gearIcon" src="/assets/images/gear-solid.svg"/>
                        <button>Connect Wallet</button>
                    </div>
                </div>
            </div>
        </Style>
    )
}