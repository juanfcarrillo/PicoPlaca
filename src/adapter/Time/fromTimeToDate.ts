import Time from '../../domain/shared/DateTime/Time'

export default function fromTimeToDate (time: Time): Date {
  const date = new Date()
  const [hours, minutes] = time.time.split(':')
  const rawHours = parseInt(hours)
  const hoursToSet = time.period === 'pm' ? rawHours + 12 : rawHours
  date.setHours(hoursToSet)
  date.setMinutes(parseInt(minutes))
  return date
}
