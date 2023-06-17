import { PicoPlacaDays } from './PicoPlacaDays'
import { afternoonRestrinction, mornignRestrinction } from './PicoPlacaTimeConstants'
import PicoPlacaTime from './PicoPlacaTime'

export default interface PicoPlaca {
  days: PicoPlacaDays
  time: PicoPlacaTime[]
}

export function getPicoPlacaRestriction (lastDigit: number): PicoPlaca {
  return {
    days: getPicoPlacaDay(lastDigit),
    time: [mornignRestrinction, afternoonRestrinction]
  }
}

// Returns the day of the restriction
function getPicoPlacaDay (lastDigit: number): PicoPlacaDays {
  if (lastDigit === 1 || lastDigit === 2) return PicoPlacaDays.Mon
  if (lastDigit === 3 || lastDigit === 4) return PicoPlacaDays.Tue
  if (lastDigit === 5 || lastDigit === 6) return PicoPlacaDays.Wed
  if (lastDigit === 7 || lastDigit === 8) return PicoPlacaDays.Thu
  if (lastDigit === 9 || lastDigit === 0) return PicoPlacaDays.Fri
  return PicoPlacaDays.Mon
}
