import { css, Theme } from '@emotion/react';
import { ColorSchemeContext } from 'context/ColorScheme';
import { memo, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

const Toaster = () => {
  const {colorScheme} = useContext(ColorSchemeContext)
  
  return (
    <ToastContainer 
      css={styles}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      theme={colorScheme === 'dark' ? 'dark' : 'light'}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

const styles = (theme: Theme) => css({
  '.Toastify__toast-theme--dark': {
    backgroundColor: theme.palette.background.secondary
  },
  '.Toastify__toast-theme--light': {
    backgroundColor: theme.palette.background.secondary
  }
})

export default Toaster;