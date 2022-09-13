import styled from "styled-components";
const Style = styled.div `
    margin-top:-20vh;
    text-align: center;
    div.loadingDiv{
        min-height:250px;
    }
    
    table{
        margin:0 auto;
        width:100%;
        background-color:#fff;
        border-collapse: collapse;
        border-spacing:0;
        border-radius:5px 5px 0 0;
        box-shadow:rgb(0, 0, 0, 40%) 0px 2px 15px -3px;
        margin-bottom:40px;
        text-align: left;
        overflow:hidden;
        tr{
            border-bottom: 1px solid rgba(34,36,38,0.1);
        }
        thead{
            background: #f9fafb;
            th{
                padding:10px 20px 15px 20px;
                font-size:14px;
                font-weight:200;
                color:rgba(0, 0, 0, 0.6) !important;
                text-align:right;
                &:nth-child(2){
                    text-align:left;
                }
            }
        }
        tbody{
            tr{
                td{
                    padding:0 20px;
                    font-size:14px;
                    text-align:right;
                    img{
                        width:30px;
                    }
                    &:first-child{
                        text-align:center;
                    }
                    &:nth-child(2){
                        display:flex;
                        align-items:center;
                        gap:10px;
                        text-align:left;
                        a{
                           h3{
                                margin-bottom:3px;
                                color:#000;
                                font-size: 14px;
                                font-weight: 300;
                            }
                            p{
                                margin-top:0;
                                font-size:11px;
                                color:#000;
                                opacity:0.7;
                            } 
                            &:hover{
                                text-decoration:underline;
                                color:#000;
                            }
                        }
                    }
                }
            }
        }
    }
    button{
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background: rgb(24, 198, 131);
        padding:10px 20px;
        transition:all 0.2s;
        border:none;
        border-radius:20px;
        margin-bottom:15px;
        font-size:15px;
        color:#fff;
        &:hover{
            transform:translateY(-5px)
        }
    }

    @media screen and (max-width:1100px){
        table{
            td:nth-child(5) , th:nth-child(5) , td:nth-child(6) , th:nth-child(6){
                display:none;
            }
        }
    }
    @media screen and (max-width:850px){
        table{
            td:nth-child(1) , th:nth-child(1) , td:nth-child(4) , th:nth-child(4){
                display:none;
            } 
        }
    }
`
export default Style;