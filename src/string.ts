export function getMidStr(str: string, start: string, end: string, index = 0): string {
  if (typeof str !== 'string' || !str)
    return ''

  let left = str.indexOf(start, index)
  if (left === -1)
    return ''

  left += start.length

  const right = str.indexOf(end, left)
  if (right === -1)
    return ''

  return str.substr(left, right - left)
}

export function getLeftStr(str: string, end: string, index = 0): string {
  if (typeof str !== 'string' || !str)
    return ''

  const right = str.indexOf(end, index)
  if (right === -1)
    return ''

  return str.substr(0, right)
}

export function getRightStr(str: string, start: string, index = 0): string {
  if (typeof str !== 'string' || !str)
    return ''

  const left = str.indexOf(start, index)
  if (left === -1)
    return ''

  return str.substr(left + start.length)
}

// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/**
 * Generate a random string
 * @category String
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  while (i--) id += dict[(Math.random() * len) | 0]
  return id
}

export function randomChar(isCase: boolean) {
  return randomStr(1, isCase ? 'abcdefghijklmnopqrstuvwxyz' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
}

export function randomNumber() {
  return randomStr(1, '0123456789')
}

export function rangeNum(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function delHtmlTag(str: string) {
  return str.replace(/<[^>]+>/g, '')
}
