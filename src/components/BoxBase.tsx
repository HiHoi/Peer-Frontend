import React from 'react'
import { Container, SxProps } from '@mui/material'
import useMedia from '@/hook/useMedia'

const PCBase = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '80px',
}

const MobileBase = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '80px 16px',
}

const BoxBase = ({
  children,
  mobileSx,
  pcSx,
}: {
  children: React.ReactNode
  mobileSx: SxProps
  pcSx: SxProps
}) => {
  const isPc = useMedia()
  return (
    <Container sx={isPc ? PCBase : MobileBase}>
      <Container sx={isPc ? pcSx : mobileSx} disableGutters={true}>
        {children}
      </Container>
    </Container>
  )
}

export default BoxBase