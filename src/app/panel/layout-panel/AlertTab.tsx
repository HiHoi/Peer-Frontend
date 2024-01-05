'use client'

import {
  Avatar,
  Badge,
  Drawer,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { IconButton, Button } from '@mui/material'
import { SyntheticEvent, useCallback, useState } from 'react'
import { Box } from '@mui/system'
import NotificationIcon from '@/icons/NotificationIcon'
import useMedia from '@/hook/useMedia'
import { green, red, yellow } from '@mui/material/colors'

enum AlertTabs {
  All = 0,
  Message,
  Team,
  Notice,
}

interface IAlert {
  type: AlertTabs
  title: string
  content: string
  date: string
}

const mock: IAlert[] = [
  {
    type: AlertTabs.Message,
    title: '쪽지의 타입',
    content: '쪽지의 내용',
    date: '오늘',
  },
  {
    type: AlertTabs.Team,
    title: '쪽지의 타입',
    content: '쪽지의 내용',
    date: '오늘',
  },
  {
    type: AlertTabs.Notice,
    title: '쪽지의 타입',
    content: '쪽지의 내용',
    date: '오늘',
  },
]

interface IAlertCard {
  alert: IAlert
  deleteAlert: (e: SyntheticEvent) => void
}

const AlertCard = ({ alert, deleteAlert }: IAlertCard) => {
  return (
    <Stack
      height={'4rem'}
      borderRadius={'1rem'}
      direction={'row'}
      alignItems={'center'}
      display={'flex'}
    >
      <Stack flex={1}>
        {alert.type === AlertTabs.Notice && (
          <Avatar
            sx={{
              width: '3rem',
              height: '3rem',
              bgcolor: yellow[500] + '40',
            }}
          >
            <Typography color={yellow[500]}>공지</Typography>
          </Avatar>
        )}
        {alert.type === AlertTabs.Message && (
          <Avatar
            sx={{
              width: '3rem',
              height: '3rem',
              bgcolor: green[500] + '40',
            }}
          >
            <Typography color={green[500]}>메세지</Typography>
          </Avatar>
        )}
        {alert.type === AlertTabs.Team && (
          <Avatar
            sx={{
              width: '3rem',
              height: '3rem',
              bgcolor: red[500] + '40',
            }}
          >
            <Typography color={red[500]}>팀</Typography>
          </Avatar>
        )}
      </Stack>
      <Stack
        flex={4}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack textOverflow={'ellipsis'}>
          <Typography>쪽지의 내용</Typography>
        </Stack>
        <Button variant="text" color="primary" onClick={deleteAlert}>
          X
        </Button>
      </Stack>
    </Stack>
  )
}

const AlertTab = () => {
  const [alertList, setAlertList] = useState<IAlert[]>(mock)
  const [tabvalue, setTabValue] = useState(0)
  const [isAlertComing, setIsAlertComing] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { isPc } = useMedia()

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

  const deleteAlert = (e: SyntheticEvent) => {
    const id = e.currentTarget.id
    setAlertList(alertList.filter((alert) => alert.date !== id))
  }

  return (
    <>
      <IconButton color="inherit" aria-label="alert_tab" onClick={openAlertTab}>
        <Badge color="secondary" variant="dot" invisible={isAlertComing}>
          <NotificationIcon
            sx={{
              color: isPc ? 'text.alternative' : 'text.normal',
              width: '1.25rem',
              height: '1.25rem',
            }}
          />
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
        <Box sx={{ width: 400, mt: 7, p: '2rem' }} role="presentation">
          <Typography fontWeight={'bold'}>알림</Typography>
          <Tabs variant="fullWidth" value={tabvalue} onChange={handleChange}>
            <Tab label="전체" />
            <Tab label="쪽지" />
            <Tab label="키워드" />
          </Tabs>
          <Stack position={'relative'}>
            <Button
              variant="text"
              color="secondary"
              sx={{
                width: '5rem',
                right: 0,
                margin: '0.5rem',
              }}
            >
              전체 삭제
            </Button>
          </Stack>
          <Stack m={'0.5rem'}>
            {tabvalue === AlertTabs.All && (
              alertList.map((alert, index) => (
                <Stack key={index} my={'1rem'}>
                  <AlertCard alert={alert} deleteAlert={deleteAlert} />
                </Stack>
              ))
            )}
            {tabvalue === AlertTabs.Message &&
              alertList
                .filter((alert) => alert.type === AlertTabs.Message)
                .map((alert, index) => (
                  <Stack key={index} my={'1rem'}>
                    <AlertCard alert={alert} deleteAlert={deleteAlert} />
                  </Stack>
                ))}
            {tabvalue === AlertTabs.Team &&
              alertList
                .filter((alert) => alert.type === AlertTabs.Team)
                .map((alert, index) => (
                  <Stack key={index} my={'1rem'}>
                    <AlertCard alert={alert} deleteAlert={deleteAlert} />
                  </Stack>
                ))}
            {tabvalue === AlertTabs.Notice &&
              alertList
                .filter((alert) => alert.type === AlertTabs.Notice)
                .map((alert, index) => (
                  <Stack key={index} my={'1rem'}>
                    <AlertCard alert={alert} deleteAlert={deleteAlert} />
                  </Stack>
                ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}

export default AlertTab
