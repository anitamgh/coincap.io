import styled from "styled-components";

const Style = styled.div `
    .headerBar{
        color:#fff;
        background-color:rgb(24, 198, 131);
        padding:20px 0 15px 0;
        ul{
            display:flex;
            justify-content:space-between;
            li{
                font-size:14px;
                cursor:pointer;
            }
        }
    }
    .welcoming{
        padding:15px 0 50px 0;
        text-align:center;
        color:#fff;
        background-image: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
        h1{
            font-size:26px;
            font-weight:300;
        }
    }
    .overview{
        background: rgb(236, 239, 241);
        position:relative;
        .overviewWrapper{
            display:flex;
            align-items:center;
            margin-top:-40px;
            img{
                width:560px;
                height:auto;
                z-index: 1;
                margin-left: -50px;
            }
            p{
                font-size:14px;
                line-height:20px;
                color:#00000099;
            }
        }
        &:after{
            content:"";
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:100px;
            background:#fff;
            background-image: linear-gradient(to right , rgb(255, 255, 255), rgba(216, 216, 216, 0.208));
        }
        &:before{
            content:"";
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:50px;
            background-image:linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
        }
    }
    .comparison{
        padding:50px 0;
        text-align:center;
        background-image:linear-gradient(to right ,rgb(255,255,255),rgba(216,216,216,0.208));
        h1{
            color: rgba(0, 0, 0, 0.9);
            font-weight:300;
            font-size:26px;
            margin-bottom:40px;
        }
        .chartWrapper{
            background-image: url(https://coincap.io/static/images/chartBG.png);
            background-size: 85%;
            background-repeat: no-repeat;
            background-position: center center;
            display:flex;
            padding: 0 100px;
            min-height:65vh;
            ul{
                width:50%;
                li{
                    margin-bottom:30px;
                    h2{
                        font-size:20px;
                        margin:15px 60px 50px;
                        color:rgb(24, 198, 131);
                    }
                    p.pros{
                        font-size:15px;
                        max-width:70%;
                        color:#00000099;
                        margin:40px auto;
                        line-height:30px;
                    }
                }
                &:first-child{
                    border-right:1px solid rgb(238, 238, 238);
                    text-align:right;
                }
                &:nth-child(2){
                    text-align:left;
                }
            }
        }
        .footerText{
            font-size:15px;
            max-width:70%;
            margin:0 auto 15px auto;
            line-height:23px;
            color: rgba(0, 0, 0, 0.6);
            span{
                font-weight:bolder;
            }
        }
    }
    .pricingMethodology{
        padding:50px 0;
        background-image: linear-gradient(rgb(255, 255, 255), rgba(216, 216, 216, 0.208));
        .contentWrapper{
            display:flex;
            align-items:center;
            gap:20px;
            img{
                width:55%;
            }
            .info{
                width:45%;
                h1{
                    margin-bottom:50px;
                    font-size:27px;
                    font-weight:300;
                }
                p{
                    font-size:14px;
                    margin-bottom:40px;
                    color:#00000099;
                    line-height:20px;
                }
            }
        }
        .marketPrice{
            max-width:500px;
            margin:30px auto;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background:#eceff1;
            padding:20px 30px;
            div{
                &:nth-child(1){
                    p{
                        color:#00000099;
                        font-size:15px;
                    }
                }
                &:nth-child(2){
                    p{
                        color:#00000099;
                        font-size:25px;
                    }
                }
                &:last-child{
                    p{
                        margin:2px 0;
                        color:rgb(24, 198, 131);
                        font-size:14px;
                    }
                }
            }
        }
        .sectionFooter{
            p{
                line-height:20px;
                color:#00000099;
                font-size:16px;
                margin-bottom:10px;
                a{
                    color:#4183c4;
                }
            }
        }
    }
    .outlierDetection{
        padding:20px 0 0 0;
        background-image: linear-gradient(rgb(255, 255, 255), rgba(216, 216, 216, 0.208));
        .introWrapper{
            display:flex;
            padding-bottom:20px;
            div{
                &:first-child{
                    width:60%;
                    h1{
                        font-size:25px;
                        font-weight:300;
                        margin-bottom:50px;
                    }
                    p{
                        font-size:14px;
                        line-height:20px;
                        color:#00000099;
                    }
                }
                &:last-child{
                    width:40%;
                    img{
                        width:100%;
                        height:auto;
                    }
                }
            }
        }
        .list{
            ul{
                li{
                    display:flex;
                    align-items:flex-start;
                    gap:30px;
                    position:relative;
                    min-height:180px;
                    .number{
                        background-color:#fff;
                        padding:15px 20px;
                        border-radius:50%;
                        box-shadow: rgba(0, 0, 0, 40%) 0px 2px 15px;
                        z-index:1;
                        p{
                            font-size:20px;
                            margin:0;
                        }
                    }
                    .description{
                        P:first-child{
                            font-size:15px;
                            color:rgb(24, 198, 131);
                        }
                        p:last-child{
                            line-height:20px;
                            font-size:14px;
                            color:#00000099;
                            margin-bottom:30px;
                        }
                    }
                    &:first-child:after , &:nth-child(2):after{
                        content:"";
                        width:0.5px;
                        height:100%;
                        background-color:rgb(216, 216, 216);
                        position:absolute;
                        top:0;
                        left:25px;
                    }
                }
            }
        }
    }
    .rank{
        background-image: linear-gradient(rgb(255, 255, 255), rgba(216, 216, 216, 0.208));
        padding:40px 0;
        ul{
            list-style:disc;
        }
        .topSection{
            padding-bottom:30px;
            display:flex;
            .text{
                width:60%;
                padding-right:6%;
                h1{
                    font-size:25px;
                    font-weight:200;
                }
                p , li{
                    font-size:14px;
                    line-height:20px;
                    color:#00000099;
                }
                ul{
                    padding-left:50px;
                }
            }
            .image{
                width:40%;
                img{
                    width:100%;
                    height:auto;
                }
            }
        }
        .middleSection{
            display:flex;
            padding-bottom:30px;
            img{
                width:40%;
                height:auto;
            }
            ul{
                width:60%;
                padding-left:11%;
                li{
                    font-size:14px;
                    line-height:20px;
                    color:#00000099;
                }
            }
        }
        .bottomSection{
            h1{
                color:rgb(24, 198, 131);
                font-weight:300;
            }
            p{
                font-size:14px;
                line-height:20px;
                color: rgba(0, 0, 0, 0.6);
                margin-bottom:15px;
            }
        }
    }
`;

export default Style;