import '@emotion/react'
import '@emotion-icons/emotion-icon'

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
    };
    boxShadow: {
      sm: string;
    };
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
    padding: string;
    borderRadius: string;
  }
}

interface emotionAsProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}