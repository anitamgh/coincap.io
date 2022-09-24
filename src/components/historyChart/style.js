import styled from "styled-components";

const Style = styled.div `
margin-top:40px;
    canvas{
       
    }
    .interval{
        margin:40px 0 0 30px;
        span{
            margin: 0 15px;
            cursor:pointer;
            color:rgb(24, 198, 131);
            font-size:12px;
            &:hover{
                background-color:rgb(24, 198, 131);
                color: #fff;
                padding:5px 10px;
                border-radius:15px; 
            }
        }
    }
`

export default Style;