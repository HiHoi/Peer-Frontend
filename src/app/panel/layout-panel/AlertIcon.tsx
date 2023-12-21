'use client'

import {
  Badge,
  Card,
  Drawer,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { IconButton, Button } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { SyntheticEvent, useCallback, useState } from 'react'
import { Box } from '@mui/system'

enum AlertTab {
  All = 0,
  Message,
  Team,
  Notice,
}

const AlertIcon = () => {
  const [tabvalue, setTabValue] = useState(0)
  const [isAlertComing, setIsAlertComing] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openAlertTab = useCallback(() => {
    setIsAlertComing(true)
    setIsDrawerOpen(true)
  }, [setIsAlertComing, setIsDrawerOpen])

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsDrawerOpen(open)
    },
    [setIsDrawerOpen],
  )

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <>
      <IconButton color="inherit" aria-label="alert_tab" onClick={openAlertTab}>
        <Badge color="secondary" variant="dot" invisible={isAlertComing}>
          <NotificationsIcon color="primary" />
        </Badge>
      </IconButton>
      <Drawer
        variant="temporary"
        anchor={'right'}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{ width: 400, mt: 7 }} role="presentation">
          <Tabs value={tabvalue} onChange={handleChange}>
            <Tab label="전체" />
            <Tab label="쪽지" />
            <Tab label="팀활동" />
            <Tab label="공지" />
          </Tabs>
          <Stack position={'relative'}>
            <Button
              variant="text"
              color="primary"
              sx={{ width: '5rem', right: 0 }}
            >
              전체 삭제
            </Button>
          </Stack>
          <Stack m={'1rem'}>
            <Typography>오늘</Typography>
            <Card
              sx={{
                height: '4rem',
                borderRadius: '1rem',
                direction: 'row',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Stack flex={1}>
                <Typography> 쪽지의 타입 </Typography>
              </Stack>
              <Stack flex={4}>
                <Typography> 쪽지의 내용 </Typography>
              </Stack>
            </Card>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}

export default AlertIcon
