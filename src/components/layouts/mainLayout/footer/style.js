import styled from "styled-components";

const Style = styled.div `
background-image: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));  
    ul{
        display:flex;
        flex-wrap:wrap;
        padding:25px 0 40px 0;
        li{
            width:25%;
            color:#fff;
            h3{
                font-size:15px;
            }
            a{
                color:#fff;
                opacity:0.5;
                &:hover{
                    opacity:1;
                }
                img{
                    &.social{
                        width:20px;
                        height:auto; 
                        margin-right:10px; 
                    }
                }
            }
            p{
                margin:0;
                padding:0 0 3px 0;
                font-size:14px;
            }
            &:nth-child(2){
               p{
                &.description{
                    opacity:0.5;
                }
            } 
        }
    }
    @media screen and (max-width:1110px){
        padding:25px 20px 40px 20px;
    }
    @media screen and (max-width:990px){
        li{
            width:50%;
        }
`

export default Style;