import Time, { ensureValidTime } from '../shared/DateTime/Time'

export default interface PicoPlacaTime {
  from: Time
  to: Time
}

// from: The time from
// to: The time to
// Format hh:mm (am/pm)
export function ensureValidPicoPlacaTime (time: PicoPlacaTime) {
  if (time.from === null && time.from === undefined) throw new Error('Time from is required')
  if (time.to === null && time.to === undefined) throw new Error('Time to is required')

  ensureValidTime(time.from)
  ensureValidTime(time.to)
}
