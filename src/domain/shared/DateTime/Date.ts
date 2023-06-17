type NDate = string

export function ensureValidDate (date: NDate) {
  if (date === '') throw new Error('Date is required')
  ensureFormatValidDate(date)
}

// format: mm/dd/yyyy
function ensureFormatValidDate (date: string) {
  const dateReg = /^\d{2}\/\d{2}\/\d{4}$/
  if (!dateReg.test(date)) throw new Error('Date format is invalid')
}

export default NDate
