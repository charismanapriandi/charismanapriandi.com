import { Theme } from "@emotion/react";

const layout = {
  boxShadow: {
    sm: 'rgba(0, 0, 0, 0.04) 0px 3px 5px'
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
  padding: '10px 20px',
  borderRadius: '10px'
}

export const theme: Theme = {
  palette: {
    color: {
      primary: '#3481EF',
      secondary: '#FB4E00',
      border: '#CDCDCD',
      error: '#FB4E00',
      success: '#17D386'
    },
    background: {
      primary: '#F6F6F6',
      secondary: '#FDFDFD',
    },
    text: {
      primary: '#393939',
      secondary: '#979797',
      highlight: '#3481EF'
    }
  },
  ...layout
}

export const darkTheme: Theme = {
  palette: {
    color: {
      primary: '#3F8AF9',
      secondary: '#4FA8F6',
      border: '#363B3F',
      error: '#FC6474',
      success: '#24D073',
    },
    background: {
      primary: '#1A1C1E',
      secondary: '#282A2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9298A5',
      highlight: '#3F8AF9',
    }
  },
  ...layout
}
