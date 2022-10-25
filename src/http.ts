import qs from 'querystring'

export const qsParse = (...rest: Parameters<typeof qs.parse>) => qs.parse(...rest)

export const qsStringify = (...rest: Parameters<typeof qs.stringify>): string => qs.stringify(...rest)

export const urlencode = (str: string): string => encodeURIComponent(str)

export const urldecode = (str: string): string => decodeURIComponent(str)
