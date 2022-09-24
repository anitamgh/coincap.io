import styled from "styled-components";

const Style = styled.div `
    display:flex;
    width:70%;
    align-items:center;
    justify-content:space-between;
    .left{
        display:flex;
        width:35%;
        gap:20px;
        align-items:center;
        .col{
            h1{
                font-weight:600;
                margin-top:0;
            }
            p{
                font-size:14px;
                max-width:110px;
                margin-bottom:0;
            }
        }
    }
    .right{
        display:flex;
        width:65%;
        justify-content:space-around;
        .col{
            .box{
                display:flex;
                gap:5px;
                align-items:flex-start;
                h2{
                    color:gray;
                    margin:0 0 20px 0;
                }
                span{
                    font-size:16px;
                    font-weight:bold
                }
            }
        }
    }
`;

export default Style