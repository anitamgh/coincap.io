import styled from "styled-components";

const Style = styled.div `
    .swapBox{
        background:#fff;
        width:320px;
        height:400px;
        margin-top:-40px;
        box-shadow:rgba(0, 0, 0, 10%) 0px 0px 9px;
        border-radius:15px;
        padding:10px 20px;
        .swapAndGear{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:5px;
            h1{
                font-size:20px;
            }
            img{
                width:20px
            }
        }
        .sellBox{
            border-radius: 10px;
            padding:0 15px;
            border: 1px solid rgb(236, 239, 241);
            background: rgb(249, 249, 249);
            display:flex;
            justify-content:space-between;
            .sell{
                p{
                    font-size:15px;
                    color:rgba(0, 0, 0, 0.6);
                    font-weight:bold;
                }
            }
            .tokenToSell{
                display:flex;
                align-items:center;
                gap:5px;
                cursor:pointer;
                &:hover{
                    color:rgb(24, 198, 131);
                }
                img{
                    width:30px;
                }
                h1{
                    font-size:15px;
                }
                img.angleDown{
                    width:20px;
                }
            }
        }
        .shuffleImage{
            padding:15px 10px;
            img{
                width:30px;
            }
        }
        .getBox{
            border-radius: 10px;
            padding:0 15px;
            border: 1px solid rgb(236, 239, 241);
            background: rgb(249, 249, 249);
            display:flex;
            justify-content:space-between;
            .get{
                p{
                    font-size:15px;
                    color:rgba(0, 0, 0, 0.6);
                    font-weight:bold;
                }
            }
            .tokenToGet{
                display:flex;
                gap:5px;
                align-items:center;
                cursor:pointer;
                &:hover{
                    color:rgb(24, 198, 131);
                }
                h1{
                    font-size:15px;
                }
                img.angleDown{
                    width:20px;
                }
            }
        }
        .connectWallet{
            text-align:center;
            margin-top:15px;
            font-size:20px;
            color:#fff;
            background-color:rgb(24, 198, 131);
            padding:20px 0;
            border-radius:30px;
            cursor:pointer;
            &:hover{
                background-color:rgba(24, 198, 131, 0.9);
            }
        }
    }
`;

export default Style;