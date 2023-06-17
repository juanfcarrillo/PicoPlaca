import PicoPlacaTime from './PicoPlacaTime'

export const mornignRestrinction: PicoPlacaTime = {
  from: { time: '07:00', period: 'am' },
  to: { time: '9:30', period: 'am' }
}

export const afternoonRestrinction: PicoPlacaTime = {
  from: { time: '4:00', period: 'pm' },
  to: { time: '7:30', period: 'pm' }
}
