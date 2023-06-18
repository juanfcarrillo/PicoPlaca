import { test, expect } from 'vitest'
import { getPicoPlacaRestriction } from '../domain/PicoPlaca/PicoPlaca'
import { Days } from '../domain/shared/Days'

test('getPicoPlacaRestriction', () => {
  expect(getPicoPlacaRestriction(1)).toStrictEqual({
    days: Days.Mon,
    time: [{
      from: {
        time: '7:00',
        period: 'am'
      },
      to: {
        time: '9:30',
        period: 'am'
      }
    },
    {
      from: {
        time: '4:00',
        period: 'pm'
      },
      to: {
        time: '7:30',
        period: 'pm'
      }
    }
    ]
  })
})
