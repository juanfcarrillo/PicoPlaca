import PicoPlaca from "../PicoPlaca/PicoPlaca"

export default interface Plate {
    identifier: string
    lastDigit: number
    restriction: PicoPlaca
}

export function ensureValidPlate(plate: Plate) {
    if (!plate) throw new Error("Plate is required")

    if (!plate.identifier) throw new Error("Plate identifier is required")
    if (!plate.lastDigit) throw new Error("Plate last digit is required")

    ensureFormatValidPlate(plate.identifier)
    ensureFormatValidLastDigit(plate.lastDigit)
}

export function getLastDigit(plate: Plate) {
    const lastStringDigit = plate.identifier[plate.identifier.length - 1]

    if (!isNaN(Number(lastStringDigit))) return Number(lastStringDigit)
    
    const secondLastDigit = plate.identifier[plate.identifier.length - 2]
    if (isNaN(Number(secondLastDigit))) throw new Error("Plate last digit is not valid")
    return Number(secondLastDigit)
}

export function ensureFormatValidPlate(identifier: string) {
    const regex = new RegExp("^[A-Z]{3}[0-9]{3,4}$")
    if (!regex.test(identifier)) throw new Error("Plate identifier is not valid")
}

function ensureFormatValidLastDigit(lastDigit: number) {
    if (lastDigit < 0 || lastDigit > 9) throw new Error("Plate last digit is not valid")
    if (typeof lastDigit !== 'string') throw new Error("Plate last digit is not valid")
}