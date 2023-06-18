import { Days } from '../shared/Days'
import { afternoonRestrinction, mornignRestrinction } from './PicoPlacaTimeConstants'
import PicoPlacaTime from './PicoPlacaTime'

export default interface PicoPlaca {
  days: Days
  time: PicoPlacaTime[]
}

export function getPicoPlacaRestriction (lastDigit: number): PicoPlaca {
  return {
    days: getPicoPlacaDay(lastDigit),
    time: [mornignRestrinction, afternoonRestrinction]
  }
}

// Returns the day of the restriction
export function getPicoPlacaDay (lastDigit: number): Days {
  if (lastDigit === 1 || lastDigit === 2) return Days.Mon
  if (lastDigit === 3 || lastDigit === 4) return Days.Tue
  if (lastDigit === 5 || lastDigit === 6) return Days.Wed
  if (lastDigit === 7 || lastDigit === 8) return Days.Thu
  if (lastDigit === 9 || lastDigit === 0) return Days.Fri
  return Days.Mon
}
