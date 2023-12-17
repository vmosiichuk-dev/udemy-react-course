import { useState, useEffect, useCallback, useMemo, useRef, useReducer } from "react"

function useInputWithValidation(init) {
    const [value, setValue] = useState(init)

    const onChange = e => {
        setValue(e.target.value)
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0
    }

    return { value, onChange, validateInput }
}

const countFactorial = (num) => {
    if (num === 0 || num === 1) return 1
    for (let i = num - 1; i >= 1; i--) num *= i
    return num
}

const Slide = () => {
    const [images, setImages] = useState([])

    const getSomeImages = useCallback(() => {
        return [
            /* "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg", */
            "https://www.planetware.com/photos-large/I/italy-florence-cathedral-of-santa-maria-del-fiore.jpg"
        ]
    }, [])

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (<>
        { images.map((url, i) => 
            <img 
            src={url} 
            key={`slide ${i}`} 
            alt={`slide ${i}`}
            className="d-block w-90"  
            />
        )}
    </>)
}

function reducer(state, action) {
    switch (action.type) {
        case "toggle": return { 
            state: !state.state 
        }
        case "slow": return { 
            state: 300 
        }
        case "fast": return { 
            state: 700 
        }
        case "custom": return {
            state: action.payload
        }
        default: throw new Error()
    }
}

function handleInitialState(initialState) {
    return { state: initialState }
}

const Slider = ({ initialState }) => {
    const [slide, setSlide] = useState(0)
    const text = useInputWithValidation("")
    const textArea = useInputWithValidation("")
    const textColor = text.validateInput() ? "text-danger" : null
    const myRef = useRef(null)

//  const [autoplay, setAutoplay] = useState(false)
//  const initialAutoplayState = { state: false }
    const [autoplay, dispatch] = useReducer(reducer, initialState, handleInitialState)

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }
/* 
    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }
 */
    const focusMyRef = () => {
        myRef.current.focus()
    }

    const factorial = useMemo(() => {
        return countFactorial(slide)
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? "red" : "blue"
    }), [slide])

    useEffect(() => {
        document.title = `Slide: ${slide}`
    }, [slide])

    return (
        <>
            <div className="text-center" style={style}>Factorial from counter: { factorial }</div>
            <div className="text-center min-h-48">
                Counter: { slide } 
                <br/> 
                { autoplay.state ? "autoplay is active" : null }
            </div>
            <div className="buttons mt-3">
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => changeSlide(-1)}>
                    -1
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => changeSlide(1)}>
                    +1
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => dispatch({type: "toggle"})}>
                    Toggle autoplay
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => dispatch({type: "slow"})}>
                    Slow autoplay
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => dispatch({type: "fast"})}>
                    Fast autoplay
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={(e) => dispatch({type: "custom", payload: +e.target.textContent})}>
                    1000
                </button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={focusMyRef}>
                    Set focus on input
                </button>
            </div>
            <div className="buttons mt-3">
                <input 
                    value={`${text.value} / ${textArea.value}`} 
                    type="text" 
                    className="me-2" 
                    readOnly 
                    disabled 
                />
                <input 
                    value={text.value}
                    onChange={text.onChange} 
                    type="email" 
                    ref={myRef} 
                    className={`me-2 ${textColor}`} 
                    placeholder="name@example.com" 
                />
            </div>
            <div className="buttons mt-3">
                <label htmlFor="textArea" className="form-label">Text Area</label>
                <textarea value={textArea.value} onChange={textArea.onChange} id="textArea" className="form-control" rows="3"></textarea>
            </div>
        </>
    )
}

function MainPage() {
    return (
        <div className="slider">
            <Slide />
            <Slider />
        </div>
    )
}

export default MainPage