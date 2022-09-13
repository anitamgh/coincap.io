import styled from "styled-components";
const Style = styled.div `
    background:linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
    color:#fff;
    ul{
        display:flex;
        justify-content:space-between;
        padding: 10px 0 25vh 0;
        flex-wrap:wrap;
        li{
            text-align:center;
            width:16.66%;
            h2{
                margin-bottom:2px;
                font-size:1.5rem
            }
            p{
                margin:0;
                font-size:2rem;
            }
        }
    }
    @media screen and (max-width:990px){
        ul{
            li{
                width:33.33%;
                &:first-child{
                    padding-bottom:20px;
                }
            }
        }
    }
`

export default Style