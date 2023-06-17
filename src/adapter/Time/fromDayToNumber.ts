import { Days } from '../../domain/shared/Days'

const dateDaysEquivalent = [
  Days.Sun,
  Days.Mon,
  Days.Tue,
  Days.Wed,
  Days.Thu,
  Days.Fri,
  Days.Sat
]

export default function fromDayToNumber (day: Days) {
  return dateDaysEquivalent.indexOf(day)
}
