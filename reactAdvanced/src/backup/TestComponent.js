import { useState, flushSync } from "react"

function TestComponent() {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    function handleClick() {
        setTimeout(() => {
            flushSync(() => {
                setCount(count => count + 1)
            })
            //
            // some other logic
            //
            flushSync(() => {
                setFlag(flag => !flag)
            })
        }, 100)
    }

    console.log("render")

    return (
        <div>
            <button onClick={ handleClick }>Next</button>
            <h1 style={{ color: flag ? "green" : "red" }}>{count}</h1>
        </div>
    )
}

export default TestComponent