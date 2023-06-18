import { test, expect } from 'vitest'
import hasRestriction from '../../../utils/Plate/hasRestriction'
import { Days } from '../../../domain/shared/Days'
import { afternoonRestrinction, mornignRestrinction } from '../../../domain/PicoPlaca/PicoPlacaTimeConstants'
import Plate from '../../../domain/Plate/Plate'

test('hasRestrictions, the plate has a restriction', () => {
  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-06T00:00:00'),
    new Date('2023-06-06T08:00:00')
  )).toBe(true)

  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-06T00:00:00'),
    new Date('2023-06-06T16:00:00')
  )).toBe(true)

  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-06T00:00:00'),
    new Date('2023-06-06T19:30:00')
  )).toBe(true)
})

test('hasRestrictions, the plate has not a restriction', () => {
  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-07T00:00:00'),
    new Date('2023-06-07T08:00:00')
  )).toBe(false)

  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-06T00:00:00'),
    new Date('2023-06-06T10:00:00')
  )).toBe(false)

  expect(hasRestriction(
    {
      restriction: {
        days: Days.Tue,
        time: [mornignRestrinction, afternoonRestrinction]
      }
    } as Plate,
    new Date('2023-06-06T00:00:00'),
    new Date('2023-06-06T10:00:00')
  )).toBe(false)
})
