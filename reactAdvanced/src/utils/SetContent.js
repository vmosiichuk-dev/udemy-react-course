import { Wait, Load, Confirm, Error } from "../components/ProcessComponents"

const setContent = (process) => {
    switch (process) {
        case "waiting": return <Wait />
        case "loading": return <Load />
        case "confirmed": return <Confirm />
        case "error": return <Error />
        default: throw new Error("Unexpected process state")
    }
}

export default setContent