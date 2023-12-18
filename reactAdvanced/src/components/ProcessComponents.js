function Wait() {
    return (
        <div style={{position: "fixed", zIndex: "100", width: "100dvw", height: "100dvh", background: "darkslateblue", color: "floralwhite"}}>
            <p>Process: Waiting</p>
        </div>
    )
}

function Load() {
    return (
        <div style={{position: "fixed", zIndex: "100", width: "100dvw", height: "100dvh", background: "darkslateblue", color: "floralwhite"}}>
            <p>Process: Loading</p>
        </div>
    )
}

function Confirm() {
    return (
        <div style={{position: "fixed", zIndex: "100", width: "100dvw", height: "100dvh", background: "darkslateblue", color: "floralwhite"}}>
            <p>Process: Confirmed</p>
        </div>
    )
}

function Error() {
    return (
        <div style={{position: "fixed", zIndex: "100", width: "100dvw", height: "100dvh", background: "darkslateblue", color: "floralwhite"}}>
            <p>Process: Error</p>
        </div>
    )
}

export { Wait, Load, Confirm, Error } 