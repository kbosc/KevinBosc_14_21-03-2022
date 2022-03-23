import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: ${props => props.theme.colors.text};
      text-align: center;
    }
    html, body, nav, header, footer, div, span,
    h1, h2, h3, p,
    a, img,
    ul, li,
    table, form, label, input, textarea, select, button {
    margin: 0;
    padding: 0;
    border: 0;
    // font-size: 100%;
    }
    ul {
    list-style: none;
    }
    li {
    list-style: none;
    }
`
export default StyledGlobalStyle

