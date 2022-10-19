import { expect, it } from 'vitest'
import { qsParse, qsStringify } from './http'

it('qsParse', () => {
  expect(qsParse('a=1&b=2')).toEqual({ a: '1', b: '2' })

  expect(qsParse('a=1; b=2', '; ')).toEqual({ a: '1', b: '2' })
})

it('qsStringify', () => {
  expect(qsStringify({ a: '1', b: '2' })).toEqual('a=1&b=2')

  expect(qsStringify({ a: '1', b: '2' }, '; ')).toEqual('a=1; b=2')
})
