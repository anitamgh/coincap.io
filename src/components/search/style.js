import styled from "styled-components";

const Style = styled.div `
    ul{
        display:none;
        max-height:150px;
        width:100%;
        overflow-y: auto;
        overflow-x:hidden;
        position:absolute;
        background-color:#fff;
        padding: 5px 10px;
        box-shadow: 0 0 20px rgba(34, 36, 38, 15%);
                &::-webkit-scrollbar{
                    width:10px;
                }
                &::-webkit-scrollbar-track{
                    background:#ebebed;
                }
                &::-webkit-scrollbar-thumb{
                    background:#acb2b2;
                    border-radius:15px;
                }
        li{
            padding: 10px 0 2px 0;
            border-bottom: 1px solid #000;
            &:hover span{
                color:#908d93
            }
            &:last-child{
                border:none;
            }
            span{
                color:#000;
                font-size:12px;
                margin-right:5px;
            }
        }
    }
`

export default Style