import { useEffect, useState } from "react";
import Style from "./style";

export default function Settings(){
    const [visibility1 , setVisibility1] = useState(false)
    const [visibility2 , setVisibility2] = useState(false)
    const [darkTheme , setDarkTheme] = useState(false)
    useEffect( () => {
        darkTheme ? document.body.classList.add("dark") : document.body.classList.remove("dark")
    } , [darkTheme] )
    const closeSettings = () => {
        document.body.classList.remove('showSettings')
    }
    let checkIconSrc1 = visibility1 ? "/assets/images/check-solid-black.svg" : "/assets/images/check-solid-white.svg"
    let checkIconSrc2 = visibility2 ? "/assets/images/check-solid-black.svg" : "/assets/images/check-solid-white.svg"
    return(
        <Style>
            <div className="holder">
            <div className="box">
                <ul>
                    <li>
                        <div className="settings">
                            <img className="gears" src="/assets/images/gears-solid.svg"/>
                            <h1>Settings</h1>
                        </div>
                        <img onClick={closeSettings} className="xmark" src="/assets/images/xmark-solid.svg"/>
                    </li>
                    <li>
                        <p>Dark Theme</p>
                        <div className="checkBox">
                            <img onClick=
                                {() => { 
                                setVisibility1(!visibility1) 
                                setDarkTheme(!darkTheme)
                                }}
                                className="check" src={checkIconSrc1}
                            />
                        </div>
                    </li>
                    <li>
                        <p>Flash Price Indicators</p>
                        <div className="checkBox">
                            <img onClick={() => setVisibility2(!visibility2)} className="check" src={checkIconSrc2}/>
                        </div>
                    </li>
                    <li>
                        <p>USD</p>
                        <img className="caret" src="/assets/images/caret-down-solid.svg"/>
                    </li>
                    <li>
                        <p>English</p>
                        <img className="caret" src="/assets/images/caret-down-solid.svg"/>
                    </li>
                </ul>
            </div>
            </div>
        </Style>
    )
}