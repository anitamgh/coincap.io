import Style from "./style"

export default function LoadingAnimation({size}){
    return(
        <Style>
            <div className="loader" style={ {fontSize: size} }>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
                <div className="loaderRow"></div>
            </div>
        </Style>
    )
}