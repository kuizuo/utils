import qs from 'querystring'

const SEP = '&'
const EQ = '='

export const qsParse = (text: string, sep: string = SEP, eq: string = EQ) => qs.parse(text, sep, eq)

export const qsStringify = (obj: qs.ParsedUrlQueryInput, sep: string = SEP, eq: string = EQ): string => qs.stringify(obj, sep, eq)

export const urlencode = (str: string): string => encodeURIComponent(str)

export const urldecode = (str: string): string => decodeURIComponent(str)
