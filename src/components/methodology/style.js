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
            background-color:#fff;
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
`;

export default Style;