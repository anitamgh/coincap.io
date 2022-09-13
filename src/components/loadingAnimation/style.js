import styled from "styled-components";

const Style = styled.div `
@keyframes animate {
    0% {
        height:1em; 
    }
    50% {
        height:22.5em;
    }
    100% {
        height:1em;
    }
}
    .loader{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:2.5em;
        .loaderRow{
            width:3em;
            height:1em;
            border-radius:2.5em;
            background:#fff;
            animation: animate 1.5s ease-in-out infinite;
            &:nth-child(1){
                background: #90e0ef;
                animation-delay: 1s;
            }
            &:nth-child(2){
                background: #00b4d8;
                animation-delay: 0.8s;
            }
            &:nth-child(3){
                background: #caf0f8;
                animation-delay: 0.6s;
            }
            &:nth-child(4){
                background: #90e0ef;
                animation-delay: 0.4s;
            }
            &:nth-child(5){
                background: #03045e;
                animation-delay: 0.2s;
            }
            &:nth-child(6){
                background: #0077b6;
                animation-delay: 0.2s;
            }
            &:nth-child(7){
                background: #90e0ef;
                animation-delay: 0.4s;
            }
            &:nth-child(8){
                background: #caf0f8;
                animation-delay: 0.6s;
            }
            &:nth-child(9){
                background: #00b4d8;
                animation-delay: 0.8s;
            }
            &:nth-child(10){
                background: #90e0ef;
                animation-delay: 1s;
            }
        }
    }
`
export default Style;