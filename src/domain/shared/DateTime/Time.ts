export default interface Time {
  time: string
  period: 'am' | 'pm'
}

// Ensure the rules of the time
// Format hh:mm (am/pm)
export function ensureValidTime (time: Time) {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  const periodRegex = /^am|pm$/
  if (!timeRegex.test(time.time)) throw new Error('Time is not valid')
  if (!periodRegex.test(time.period)) throw new Error('Time period is not valid')
}
