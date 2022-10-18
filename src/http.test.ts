import { expect, it } from 'vitest'
import { obj2query, query2obj } from './http'

it('query2obj', () => {
  expect(query2obj('a=1&b=2')).toEqual({ a: '1', b: '2' })

  expect(query2obj('a=1; b=2', '; ')).toEqual({ a: '1', b: '2' })
})

it('obj2query', () => {
  expect(obj2query({ a: '1', b: '2' })).toEqual('a=1&b=2')
  
  expect(obj2query({ a: '1', b: '2' }, '; ')).toEqual('a=1; b=2')
})
