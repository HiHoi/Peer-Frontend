import {
  DateHeaderProps,
  ToolbarProps,
  Event,
  Calendar,
  dayjsLocalizer,
} from 'react-big-calendar'
import dayjs from 'dayjs'
import { Box, Stack } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { useMemo } from 'react'
import '../style/CalendarMini.scss'

const localizer = dayjsLocalizer(dayjs)

// ============= 이벤트 mock data ==============

type TEventColor = '#CB62D0' | 'F4CE14' // 임시 데이터

interface IEvent extends Event {
  id: number
  color: TEventColor // 그 이벤트에 해당하는 색깔. (디자인에 따라서 위젯에서는 색깔을 다르게 보여주지 않을수도 있음)
}

// NOTE : 이벤트 타입은 이거 확장해서 쓰는게 안전할듯..?
// export interface Event {
//   allDay?: boolean | undefined
//   title?: React.ReactNode | undefined
//   start?: Date | undefined
//   end?: Date | undefined
//   resource?: any
// }

const events: IEvent[] = [
  {
    id: 1,
    color: '#CB62D0',
    title: 'test',
    start: new Date(),
    end: new Date(),
  },
  {
    id: 2,
    color: '#CB62D0',
    title: 'test',
    start: new Date(),
    end: new Date(),
  },
  {
    id: 3,
    color: '#CB62D0',
    title: 'test',
    start: new Date(),
    end: new Date(),
  },
  {
    id: 4,
    color: '#CB62D0',
    title: 'test',
    start: new Date(),
    end: new Date(),
  },
]

// ========================================

// 상단 달 표시 컴포넌트
function Toolbar(props: ToolbarProps) {
  const { date } = props

  return (
    <div className="rbc-toolbar">
      <span className="rbc-toolbar-label">
        {
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'Octobor',
            'November',
            'December',
          ][date.getMonth()]
        }
      </span>
    </div>
  )
}

// ============= 위젯 뷰 커스텀 컴포넌트 ==============

// 날짜 칸 컴포넌트 (기본 스타일 제거용)
const DayCell = () => {
  return <div className="rbc-day-bg" />
}

// 날짜 (숫자) 컴포넌트
const DayHeader = (props: DateHeaderProps) => {
  const { date } = props
  const today = new Date()
  const isToday = dayjs(date).isSame(today, 'day')
  const isEventDay = events.some(
    (event) =>
      dayjs(event.start).isSame(date, 'day') ||
      dayjs(event.end).isSame(date, 'day'),
  )
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      className={`rbc-day-header ${isToday ? 'is-today' : ''}`}
    >
      {date.getDate()}
      {isEventDay && <CircleIcon className="event-icon" />}
    </Stack>
  )
}

const DayEvent = () => {
  // 위젯에서는 이벤트에 대한 상세 정보를 보여주지 않음.
  return null
}

// ===============================================

const CalendarMini = () => {
  const formats = useMemo(
    () => ({
      // 요일 표시 포맷
      weekdayFormat: (date: Date) =>
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()],
    }),
    [],
  )
  const components = useMemo(
    () => ({
      toolbar: Toolbar,
      dateCellWrapper: DayCell,
      month: { dateHeader: DayHeader, event: DayEvent },
    }),
    [],
  )

  return (
    <Box sx={{ height: '300px' }}>
      <Calendar
        localizer={localizer}
        formats={formats}
        components={components}
        events={events}
      />
    </Box>
  )
}

export default CalendarMini
