import React from 'react'
import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import ShareIcon from '@/icons/ShareIcon'
import MoreHorizontalIcon from '@/icons/MoreHorizontalIcon'
import ReportIcon from '@/icons/ReportIcon'
import useMedia from '@/hook/useMedia'
import * as style from './DropdownMenu.style'

const IconMenuItem = ({
  handleClose,
  icon,
  text,
}: {
  handleClose: () => void
  icon: React.ReactNode
  text: string
}) => {
  return (
    <MenuItem dense onClick={handleClose}>
      <Stack
        direction={'row'}
        spacing={'0.375rem'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={style.menuItemStyle}
      >
        {icon}
        <Typography variant="Caption" color={'text.alternative'}>
          {text}
        </Typography>
      </Stack>
    </MenuItem>
  )
}

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { isPc } = useMedia()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={style.dropdownMenuButtonStyle}
      >
        <MoreHorizontalIcon
          sx={{
            ...style.dropdownMenuIconStyleBase,
            transform: isPc || anchorEl ? 'rotate(0deg)' : 'rotate(90deg)',
            color: 'text.alternative',
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          dense: true,
          sx: style.dropdownMenuStyle,
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ ...style.menuItemStyle, position: 'relative' }}
        >
          <MoreHorizontalIcon
            sx={{
              ...style.dropdownMenuIconStyleBase,
              transform: isPc || anchorEl ? 'rotate(0deg)' : 'rotate(90deg)',
              color: 'text.alternative',
            }}
          />
        </MenuItem>
        <IconMenuItem
          handleClose={handleClose}
          icon={
            <ShareIcon
              sx={{
                ...style.menuItemIconStyleBase,
                padding: '0.125rem',
                color: 'text.alternative',
              }}
            />
          }
          text={'공유'}
        />
        <IconMenuItem
          handleClose={handleClose}
          icon={
            <ReportIcon
              sx={{ ...style.menuItemIconStyleBase, color: 'text.alternative' }}
            />
          }
          text={'신고'}
        />
      </Menu>
    </div>
  )
}
export default DropdownMenu
