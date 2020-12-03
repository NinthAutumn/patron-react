import themes from "@/styles/theme.tsx";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    box-sizing: border-box;
    // -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Noto Sans JP',
      'Helvetica Neue',
      'Segoe UI',
      Helvetica,
      Verdana,
      Arial,
      sans-serif;
  }
  @media screen and (min-width:700px) {
    :root {
      font-size: 10px;
    }
  }
  
  @media screen and (max-width:700px) {
    // padding: 0.5rem;
  
    :root {
      font-size: calc(10px + (14 - 10) * ((100vw - 300px) / (500 - 300)));
    }
  
  }
  body {
    background: ${themes["default"].backgroundColor};
  
    @media screen and (min-width:700px) {
      padding-top: 4.5rem;
  
    }
  
    @media screen and (max-width:700px) {
      // padding: 0.5rem;
  
      padding-bottom: 6rem;
  
    }
  
  
  
    margin:0;
  }
  .active-link{
    color:${themes["default"].linkTextColor}
  }
  input{
    border: none;
    box-sizing: border-box;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    &:active,
    &:focus {
      outline: 0;
    }
  }
 label {
   font-size: 1.2rem;
   color:${themes["default"].textColor};
 }

h1,
h2,
h3,
h4,
h5,
p,
span {
    color: ${themes["default"].textColor};
  

  margin:0;
}


a {
    color:${themes["default"].emphasizedTextColor}; 
  
}

html {
  font-size: 10px;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.7rem;
}

h3 {
  font-size: 1.3rem;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  border: none;
  cursor: pointer;
}

button:focus {
  outline: none;
}

a,
p {
  font-size: 1.6rem;
}
`;
