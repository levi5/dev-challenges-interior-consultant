import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
}
body{
    font-family:--apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif;
    background: #181719;
   
}

html, body, #__next{
    height:100%;
}

h3, h5{
    font-family: 'Montserrat', sans-serif;
	font-style: normal;
}

nav,ul {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
li {
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.2rem;
    letter-spacing: 0em;
    text-align: left;
}
li{
    list-style:none;
    color: #fff;
    cursor:pointer;
}

`;

export default GlobalStyle;
