import PicoPlaca from '../PicoPlaca/PicoPlaca'

// identifier: The plate registration identifier
// lastDigit: The last digit of the plate registration identifier
// restriction: The restriction of the plate to circulate
export default interface Plate {
  identifier: string
  lastDigit: number
  restriction?: PicoPlaca
}

// Format ABC1234 or ABC123
// Last digit must be a number
export function ensureValidPlate (plate: Plate) {
  if (plate.identifier.length === 0) throw new Error('Plate identifier is required')
  if (Number.isNaN(plate.lastDigit)) throw new Error('Plate last digit is required')

  ensureFormatValidPlateIdentifier(plate.identifier)
  ensureFormatValidLastDigit(plate.lastDigit)
}

// Obtain the last digit of the plate
export function getLastDigit (identifier: string) {
  ensureFormatValidPlateIdentifier(identifier)

  const lastStringDigit = identifier[identifier.length - 1]

  if (!isNaN(Number(lastStringDigit))) return Number(lastStringDigit)

  const secondLastDigit = identifier[identifier.length - 2]

  if (isNaN(Number(secondLastDigit))) throw new Error('Plate last digit is not valid')

  return Number(secondLastDigit)
}

// Ensure the rules of the identifier
// Format ABC1234 or ABC123
export function ensureFormatValidPlateIdentifier (identifier: string) {
  const carRegex = /^[A-Z]{3}-[0-9]{3,4}$/
  const bikeRegex = /^[A-Z]{2}-[0-9]{3}[A-Z]$/

  if (!carRegex.test(identifier) && !bikeRegex.test(identifier)) throw new Error('Plate identifier is not valid')
}

// Ensure the rules of the last digit
// Last digit must be a number
function ensureFormatValidLastDigit (lastDigit: number) {
  if (lastDigit < 0 || lastDigit > 9) throw new Error('Plate last digit is not valid')
  if (typeof lastDigit !== 'number') throw new Error('Plate last digit is not valid')
}
