import { expect, it } from 'vitest'
import { md5, sha1 } from './crypto'

it('md5', () => {
  expect(md5('123456')).toBe('e10adc3949ba59abbe56e057f20f883e')
})

it('sha1', () => {
  expect(sha1('123456')).toBe('7c4a8d09ca3762af61e59520943dc26494f8941b')
})
