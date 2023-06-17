export default interface Time {
    from: string
    to: string
}

// Format hh:mm (am/pm)
export function ensureValidTime(time: Time) {
    if (!time) throw new Error("Time is required")

    if (!time.from) throw new Error("Time from is required")
    if (!time.to) throw new Error("Time to is required")

    ensureFormatValidTime(time.from)
    ensureFormatValidTime(time.to)
}

function ensureFormatValidTime(time: string) {
    const regex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")
    if (!regex.test(time)) throw new Error("Time from is not valid")
}