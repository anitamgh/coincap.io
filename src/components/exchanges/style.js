import styled from "styled-components";

const Style = styled.div `
background:rgb(236, 239, 241);
padding:30px 0;
text-align:center;
    table{
        width:100%;
        background-color:#fff;
        border-collapse: collapse;
        border-spacing:0;
        border-radius:5px 5px 0 0;
        box-shadow:rgb(0, 0, 0, 40%) 0px 2px 15px -3px;
        margin-bottom:40px;
        text-align: left;
        overflow:hidden;
        margin-top:-25vh;
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
                &:nth-child(1){
                    text-align:center;
                }
                &:nth-child(2){
                    text-align:left;
                }
            }
        }
        tbody{
            tr{
                td{
                    padding:20px;
                    font-size:14px;
                    text-align:right;
                    img{
                        width:30px;
                    }
                    &:first-child{
                        text-align:center;
                    }
                    &:nth-child(2){
                        align-items:center;
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
                    &:last-child{
                        div{
                            width:15px;
                            height:15px;
                            margin: 0 auto;
                            border-radius:50%;
                            color:rgb(24, 198, 131)
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
`;

export default Style;