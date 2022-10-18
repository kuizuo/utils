import dayjs from 'dayjs'

type Date =  dayjs.Dayjs | string | number | undefined

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export const formatToDateTime = (date: Date = undefined, format = DATE_TIME_FORMAT): string => 
  dayjs(date).format(format)

export const formatToDate = (date: Date = undefined, format = DATE_FORMAT): string => dayjs(date).format(format)

export const timestamp = () => +Date.now()

export const dateUtil = dayjs
