import { expect, test } from 'vitest'
import { ensureValidTime } from '../../../domain/shared/DateTime/Time'

test('ensureValidTime, ensure the domain rules of the time', () => {
  expect(() => ensureValidTime({
    time: '12:00',
    period: 'am'
  })).not.toThrowError()
  expect(() => ensureValidTime({
    time: '12:00',
    period: 'pm'
  })).not.toThrowError()

  expect(() => ensureValidTime({
    time: '120:00',
    period: 'pm'
  })).toThrowError()
  expect(() => ensureValidTime({
    time: '19:61',
    period: 'pm'
  })).toThrowError()
  expect(() => ensureValidTime({
    time: '9:50',
    period: 'pm'
  })).toThrowError()
})
