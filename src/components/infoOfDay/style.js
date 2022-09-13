import styled from "styled-components";

const Style = styled.div `
    display:flex;
    width:70%;
    justify-content:space-between;
    .left{
        display:flex;
        width:50%;
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
        width:50%;
        justify-content:space-around;
        h2{
            color:gray;
        }
    }
`;

export default Style