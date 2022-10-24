import { toString } from './base'

export const is = (val: unknown, type: string) => toString(val) === `[object ${type}]`
export const isObject = (val: any): val is Record<any, any> => val !== null && is(val, 'Object')
export const isNull = (val: unknown): val is null => val === null
export const isNumber = (val: unknown): val is number => is(val, 'Number')
export const isString = (val: unknown): val is string => is(val, 'String')
export const isBoolean = (val: unknown): val is boolean => is(val, 'Boolean')
export const isDate = (val: unknown): val is Date => is(val, 'Date')
export const isRegExp = (val: unknown): val is RegExp => is(val, 'RegExp')
export const isDef = <T = unknown>(val?: T): val is T => typeof val !== 'undefined'
export const isUnDef = <T = unknown>(val?: T): val is T => !isDef(val)
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && is(val, 'Window')
export const isElement = (val: unknown): val is Element => isObject(val) && !!val.tagName
export const isMap = (val: unknown): val is Map<any, any> => is(val, 'Map')
export const isUrl = (path: string): boolean =>
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path)

export const isPhone = (val: string): boolean => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(val)
