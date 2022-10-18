import { Base64 } from 'js-base64'

export const base64encode = (str: string): string => Base64.encode(str)
export const base64decode = (str: string): string => Base64.decode(str)
