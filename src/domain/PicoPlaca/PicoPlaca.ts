import { PicoPlacaDayRestrictions } from "./PicoPlacaDayRestrictions"
import Time from "./Time"

export default interface PicoPlaca {
    days: PicoPlacaDayRestrictions
    time: Time[]
}