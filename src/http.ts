const SEPARATOR = '&'

export const query2obj = (text: string, separator: string = SEPARATOR): Record<string, string> => {
  return text.split(separator).reduce((a: any, val) => ((a[val.slice(0, val.indexOf('=')).trim()] = val.slice(val.indexOf('=') + 1).trim()), a), {})
}

export const obj2query = (obj: Record<string, string>, separator: string = SEPARATOR): string => {
  const query: string[] = Object.keys(obj).map((key) => `${key}=${obj[key]}`)
  return query.join(separator)
}

export function urlencode(str: string): string {
  return encodeURIComponent(str)
}

export function urldecode(str: string): string {
  return decodeURIComponent(str)
}
