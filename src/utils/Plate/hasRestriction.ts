import fromDayToNumber from '../../adapter/Time/fromDayToNumber'
import fromTimeToDate from '../../adapter/Time/fromTimeToDate'
import Plate from '../../domain/Plate/Plate'

export default function hasRestriction (plate: Plate, date: Date, time: Date): boolean {
  if (plate === null || plate === undefined) throw new Error('Plate is required')
  if (date === null || date === undefined) throw new Error('Date is required')
  if (time === null || time === undefined) throw new Error('Time is required')
  if (plate.restriction === null || plate.restriction === undefined) throw new Error('Plate restriction is required')

  const restriction = plate.restriction
  const timeHours = time.getHours()
  const timeMinutes = time.getMinutes()

  const restrictionDayNumber = fromDayToNumber(restriction.days)

  if (restrictionDayNumber !== date.getDay()) return false

  for (let i = 0; i < restriction.time.length; i++) {
    const { from, to } = restriction.time[i]
    const fromTime: Date = fromTimeToDate(from)
    const toTime: Date = fromTimeToDate(to)

    if ((timeHours < toTime.getHours() && timeHours > fromTime.getHours())) return true
    if ((timeHours === toTime.getHours() && timeMinutes <= toTime.getMinutes()) || (timeHours === fromTime.getHours() && timeMinutes >= fromTime.getMinutes())) return true
  }

  return false
}
