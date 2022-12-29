import styled from 'styled-components'

const Style = styled.div `
.holder{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    backdrop-filter:blur(5px);
    background:#00000099;
    color:#fff;
    z-index:1000;
    .box{
        width:330px;
        margin:50px auto 0 auto;
        ul{
            li{
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-bottom:1px solid rgba(34,36,38,.15);
                padding:3px 0;
                p{
                    font-size:14px;
                }
                .settings{
                    display:flex;
                    gap:10px;
                }
                .checkBox{
                    background:#fff;
                    width:15px;
                    height:17px;
                    border-radius:2px;
                    // .check{
                    //     visibility:hidden;
                    // }
                    // &.show{
                    //     .check{
                    //         visibility:visible;
                    //     }
                    // }
                }
                .gears{
                    width:30px;
                    height:auto;
                }
                .check , .xmark{
                    width:15px;
                    height:auto;
                    cursor:pointer;
                }
                .caret{
                    width:10px;
                    height:auto;
                    cursor:pointer;
                }
                &:last-child{
                    border:none;
                }
            }
        }
    }
}
`

export default Style