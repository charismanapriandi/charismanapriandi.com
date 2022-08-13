import { css, Theme } from "@emotion/react";

const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

  html,
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.palette.background.primary}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`

export default globalStyles