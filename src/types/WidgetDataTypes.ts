import { Event } from 'react-big-calendar'
// Calendar

// NOTE : 이벤트 타입
// interface Event {
//   allDay?: boolean | undefined
//   title?: React.ReactNode | undefined
//   start?: Date | undefined
//   end?: Date | undefined
//   resource?: any
// }

export type TEventColor = '#CB62D0' | 'F4CE14' | '#FFD976' // 임시 데이터

export interface IEvent extends Event {
  id: number
  color: TEventColor
}