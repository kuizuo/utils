import { expect, it } from 'vitest'
import { qsParse, qsStringify } from './http'

it('qsParse', () => {
  expect(qsParse('a=1&b=2')).toEqual({ a: '1', b: '2' })

  expect(qsParse('a=1; b=2', '; ')).toEqual({ a: '1', b: '2' })

  expect(qsParse('text=%E4%B8%AD%E6%96%87')).toEqual({ text: '中文' })

  expect(qsParse('text=%E4%B8%AD%E6%96%87', '', '', { decodeURIComponent: str => str })).toEqual({ text: '%E4%B8%AD%E6%96%87' })
})

it('qsStringify', () => {
  expect(qsStringify({ a: '1', b: '2' })).toEqual('a=1&b=2')

  expect(qsStringify({ a: '1', b: '2' }, '; ')).toEqual('a=1; b=2')

  expect(qsStringify({ text: '中文' })).toEqual('text=%E4%B8%AD%E6%96%87')
  expect(qsStringify({ text: '中文' }, '', '', { encodeURIComponent: str => str })).toEqual('text=中文')
})
