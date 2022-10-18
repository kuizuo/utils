import { expect, it } from 'vitest'
import { base64encode, base64decode } from './encode'

it('base64encode', () => {
  expect(base64encode('test')).toEqual('dGVzdA==')
})

it('base64decode', () => {
  expect(base64decode('dGVzdA==')).toEqual('test')
})
