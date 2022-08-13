import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      color: {
        primary: string;
        secondary: string;
        border: string;
        error: string;
        success: string;
      },
      background: {
        primary: string;
        secondary: string;
      },
      text: {
        primary: string;
        secondary: string;
        highlight: string;
      }
    },
    font: {
      family: {
        poppins: string;
      },
      size: {
        small: string;
        medium: string;
        large: string;
      }
    },
    borderRadius: string;
  }
}
