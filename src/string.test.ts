import { expect, it } from 'vitest'
import { delHtmlTag, getMidStr } from './string'

it('getMidStr', () => {
  expect(getMidStr('Here are some strings', 'are ', ' str')).toBe('some')

  expect(getMidStr('Here are some strings', 'Here', '')).toBe('')
})

it('delHtmlTag', () => {
  expect(delHtmlTag('<div><spna>123</span></div>')).toBe('123')
})
