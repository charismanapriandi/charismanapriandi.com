import { Theme } from "@emotion/react";

export const theme: Theme = {
  palette: {
    color: {
      primary: '#3847D0',
      secondary: '#4FA8F6',
      border: '#E1E1E9',
      error: '#FB3F3D',
      success: '#17D386'
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFAFF',
    },
    text: {
      primary: '#393B4B',
      secondary: '#62646D',
      highlight: '#3847D0'
    }
  },
  font: {
    family: {
      poppins: `'Poppins', sans-serif`,
    },
    size: {
      small: '16px',
      medium: '18px',
      large: '20px',
    }
  },
  borderRadius: '15px'
}

export const darkTheme: Theme = {
  palette: {
    color: {
      primary: '#3F8AF9', //
      secondary: '#4FA8F6',
      border: '#363B3F', //
      error: '#FC6474', //
      success: '#24D073', //
    },
    background: {
      primary: '#1A1C1E', //
      secondary: '#282A2E', //
    },
    text: {
      primary: '#FFFFFF', //
      secondary: '#9298A5', //
      highlight: '#3F8AF9', //
    }
  },
  font: {
    family: {
      poppins: `'Poppins', sans-serif`,
    },
    size: {
      small: '16px',
      medium: '18px',
      large: '20px',
    },
  },
  borderRadius: '15px',
}
