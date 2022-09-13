import styled from "styled-components";
const Style = styled.div `
    background-color:#fff;
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 15%);
    position:fixed;
    top:0;
    left:0; 
    width:100%;
    height:auto;
    background-color:#fff;
    z-index:2;
    .header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .right{
            display:flex;
            gap:40px;
            align-items:center;
            padding:10px 0;
            .responsiveMenuBar{
                width:20px;
                height:auto;
                display:none;
            }
            a{
                .responsiveCoincapLogo{
                    display:none;
                    width:80px;
                    height:auto;
                }  
            }
            .responsiveMenu{
                display:none;
                padding-top:10px; 
                position:absolute;
                z-index:4;
                top:0;
                left:0;
                width:200px;
                height:100vh;
                background-color:#fff;
                color:#000;
                overflow-y:auto;
                overflow-x:hidden;
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
                ul{
                    li{
                        text-align:center;
                        a{
                            color:#000;
                            p{
                                margin:5px 0 30px 0;
                            }
                        }
                        img{
                            width:20px;
                        }
                        .input{
                            margin:10px 0;
                            position:relative;
                            img{
                                position:absolute;
                                top:5px;
                                right:10px;
                            }
                            input{
                                border:none;
                                width:200px;
                                padding:15px 10px;
                            }  
                        }
                        &:last-child{
                            border-top: 1px solid #000;
                        }
                    }
                }
                &.show{
                    display:block;
                }
            }
            .gearIcon{
                width:15px;
                height:auto;
            }
            .inputContainer{
                position:relative;
                max-width:200px;
                input{
                    padding:6px 10px;
                    width:0;
                    border:none;
                    &.clicked{
                        width:100%;
                        border:1px solid #000;
                        border-radius:5px;
                    }
                    &.clicked + div ul{
                        display:block;
                    }
                }
                img{
                    width:15px;
                    height:auto;
                    position:absolute;
                    top:0;
                    right:10px;
                    transform: translateY(50%);
                    cursor:text;
                } 
                .loading{
                    position:absolute;
                    top:10px;
                    right:5px; 
                }
            }
            button{
                cursor:pointer;
                color:#fff;
                border:none;
                font-size:15px;
                padding:9.5px 19px;
                border-radius:30px;
                box-shadow: rgba(0, 0, 0, 40%) 0px 2px 15px -3px;
                background-color: rgb(24, 198, 131);
                transition:all 0.2s;
                &:hover{
                    margin-top:-5px;
                }
            }
        }
        .center{
            padding:10px 0;
            a{
                img{
                    width:80px;
                    height:auto;
                }
            }
        }
        .left{
            display:flex;
            a{
                div{
                    color:rgba(0,0,0,.87);
                    padding:20px 10px;
                    background-color:#fff;
                    font-size:15px;
                    &:hover{
                        background: rgba(0,0,0,.03);
                        color: rgba(0,0,0,.95);
                    }
                }
            }
        }
    }
    @media screen and (max-width:1110px){
        padding:0 10px;
    }
    @media screen and (max-width:770px){
        .header{
            display:block;
            padding:0 10px;
            .right{
                justify-content:space-between;
                width:100%;
                .gearIcon , button{
                    display:none;
                }
                a{
                    .responsiveCoincapLogo{
                        display:block;
                    }  
                }
                .responsiveMenuBar{
                    display:block;
                }
            }
            .left{
                display:none;
            }
            .center{
                display:none;
            }
        }
    }
`
export default Style