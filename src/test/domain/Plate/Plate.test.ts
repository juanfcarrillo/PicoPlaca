import { expect, test } from 'vitest'
import { getLastDigit } from '../../../domain/Plate/Plate'

test('getLastDigit, get correct last digit and check domain rules', () => {
  expect(getLastDigit('PBA-1234')).toBe(4)
  expect(getLastDigit('PBA-123')).toBe(3)
  expect(getLastDigit('PD-834G')).toBe(4)

  expect(() => getLastDigit('PD-83AG')).toThrowError()
})

test('ensureFormatValidPlateIdentifier, ensure the domain rules of the identifier', () => {
  expect(() => getLastDigit('PBA-1234')).not.toThrowError()
  expect(() => getLastDigit('PB-123G')).not.toThrowError()

  expect(() => getLastDigit('PBA1234')).toThrowError()
  expect(() => getLastDigit('PBA-123G')).toThrowError()
})
