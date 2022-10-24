import { expect, it } from 'vitest'
import { delHtmlTag, getLeftStr, getMidStr, getRightStr } from './string'

it('getMidStr', () => {
  expect(getMidStr('Here are some strings', 'are ', ' str')).toBe('some')

  expect(getMidStr('Here are some strings', 'Here', '')).toBe('')
})

it('getLeftStr', () => {
  expect(getLeftStr('Here are some strings', 'are ')).toBe('Here ')
})

it('getRightStr', () => {
  expect(getRightStr('Here are some strings', 'are ')).toBe('some strings')
})

it('delHtmlTag', () => {
  expect(delHtmlTag('<div><spna>123</span></div>')).toBe('123')
})
