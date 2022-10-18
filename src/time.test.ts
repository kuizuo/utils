import { expect, it } from 'vitest'
import { formatToDateTime } from './time'

it('formatToDateTime', () => {
  expect(formatToDateTime(1666000000000)).toBe('2022-10-17 17:46:40')
})

