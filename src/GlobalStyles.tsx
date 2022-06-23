import { createGlobalStyle } from "styled-components";
import { ITheme } from "./interfaces/ITheme";

export const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export const lightTheme: ITheme = {
  lightColor: "white",
  darkColor: "#f3f6f8",
  hoverColor: "rgb(213, 216, 228)",
  textColor: "gray",
  borderColor: "lightgray",
  shadowColor: "lightgray",
};

export const darkTheme: ITheme = {
  lightColor: "#2C2C2C",
  darkColor: "rgb(32, 32, 32)",
  hoverColor: "#5C5C5C",
  textColor: "rgb(221, 221, 221)",
  borderColor: "rgb(80, 80, 80)",
  shadowColor: "black",
};
