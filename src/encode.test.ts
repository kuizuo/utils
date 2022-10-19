import { expect, it } from 'vitest'
import { base64decode, base64encode } from './encode'

it('base64encode', () => {
  expect(base64encode('test')).toEqual('dGVzdA==')
})

it('base64decode', () => {
  expect(base64decode('dGVzdA==')).toEqual('test')
})
