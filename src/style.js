import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}
  html{
    font-size:10px;
  }
  body {
    margin: 0;
    padding:50px 0 0 0;
    font-family:Lato;
  }
  .container{
    max-width:1070px;
    margin:0 auto;
  }
  ul{
    margin:0;
    padding:0;
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  @media screen and (max-width:990px){
    .container{
        max-width:725px;
    }
  }
  @media screen and (max-width:600px){
    html{
      font-size:8px;
    }
  }
`;
 
export default GlobalStyle;