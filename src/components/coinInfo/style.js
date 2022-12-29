import styled from "styled-components";

const Style = styled.div `
    .coinInfoHeader{
        background-image:linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
        color:#fff;
        .flexWrapper{
        display:flex;
        align-items:flex-start;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:30px 0 50px 0;
        .leftCol{
            display:flex;
            gap:30px;
            align-items:flex-start;
            width:50%;
            .rank{
                text-align:center;
                padding:5px 15px;
                background-color:rgb(24, 198, 131);
                border-radius:15px;
                box-shadow: rgba(0, 0, 0, 40%) 0px 2px 15px -3px;
                position:relative;
                &:before{
                    content:'';
                    display:block;
                    background-color:rgb(24, 198, 131);
                    height:10px;
                    width:75px;
                    border-radius:5px;
                    position:absolute;
                    top:0;
                    left:-10px;
                }
                h1{
                    font-size:25px;
                    margin-bottom:10px;
                }
                p{
                    font-size:9px;
                }
            }
            .price{
                h1{
                    font-size:2.5rem;
                    margin:0;
                }
                h2{
                    display:inline-block;
                    font-size:2.3rem;
                    margin-top:5px;
                }
                h3{
                    display:inline-block;
                    margin-left:15px;
                    font-size:2rem;
                }
                svg{
                    width:20px;
                    margin: 0 0 -10px 5px;
                    &.none{
                        display:none;
                    }
                    &.positive path{
                        fill:rgb(24, 198, 131);
                    }
                    &.negative path{
                        fill:rgb(244, 67, 54);
                        transform: rotate(180deg)
                    }
                }
            }
        }
        .rightCol{
            display:flex;
            justify-content:space-between;
            width:50%;
            p{
                font-size:1.5rem;
                margin:0;
            }
            h4{
                font-size:1.9rem;
                margin:0 0 15px 0;
            }
            button{
                cursor: pointer;
                color: #fff;
                font-weight:400;
                margin-top:15px;
                border: none;
                font-size: 15px;
                padding: 9.5px 19px;
                border-radius: 30px;
                box-shadow: rgba(0, 0, 0, 40%) 0px 2px 15px -3px;
                background-color: rgb(24,198,131);
                transition: all 0.2s;
                &:hover{
                    transform: translateY(-5px)
                }
            }
        }
        }
    }
    .heroSection{
        background:#fff;
        color:#000;
        .flexWrapper{
            display:flex;
        }
    }

    .exchangeTable{
        background-color:rgb(236, 239, 241);
        color:#000;
        padding:35px 0 70px 0;
    }
    @media screen and (max-width:1140px){
        .container{
            margin:0 20px;
        }
    }
    @media screen and (max-width:990px){
        .coinInfoHeader{
            .leftCol{
                .price{
                    h2{
                        margin-bottom:5px;
                    }
                    h3{
                        display:block;
                        margin:0;
                    }
                }
            }
            .rightCol{
                .supply{
                    display:none;
                }
            }
        }
    }
    @media screen and (max-width:780px){
        .coinInfoHeader{
            .rightCol , .leftCol{
                width:100%;
            }
            .rightCol{
                margin-top:20px;
                justify-content: center;
                .col{
                    width:50%;
                }
            }
        }
    }
`;

export default Style;