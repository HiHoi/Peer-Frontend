import { SxProps } from '@mui/material'

export const iconStyle: SxProps = {
  width: '0.75rem',
  height: '0.75rem',
  padding: '0.25rem',
  flexShrink: 0,
}

export const toastPcStyle: SxProps = {
  padding: '1rem',
  height: 'auto',
  minHeight: '4rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  width: '100%',
  flex: '1 0 0',
  position: 'relative',
  borderRadius: '0.75rem',
  zIndex: 1600,
  '.MuiAlert-action': {
    marginLeft: '0',
    position: 'absolute',
    right: '1rem',
  },
  '.MuiAlert-icon': {
    marginRight: '0',
    padding: '0',
  },
}

export const toastMobileStyle: SxProps = {
  padding: 0,
  paddingLeft: '1.25rem',
  paddingRight: '0.5rem',
  height: 'auto',
  minHeight: '4rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0',
  width: '100%',
  maxWidth: '20.5rem',
  flex: '1 0 0',
  borderRadius: '0.5rem',
  position: 'relative',
  bottom: '3.25rem',
  boxSizing: 'border-box',
  '.MuiAlert-action': {
    marginLeft: '0',
    paddingLeft: '0',
  },
  '.MuiAlert-icon': {
    padding: '0',
    marginRight: '0.75rem',
  },
}

export const snackbarStyleBase: SxProps = {
  boxSizing: 'border-box',
  width: '100%',
  '.MuiSnackbar-anchorOriginBottomLeft': {
    bottom: '3.25rem',
  },
}

export const snackbarPcStyle: SxProps = {
  ...snackbarStyleBase,
  px: '1.5rem',
}

export const snackbarMobileStyle: SxProps = {
  ...snackbarStyleBase,
  paddingLeft: '0.75rem',
  paddingRight: '1rem',
}
