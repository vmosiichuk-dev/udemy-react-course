import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { Container } from "react-bootstrap"
import "./App.css"

const countFactorial = (num) => {
    if (num === 0 || num === 1) return 1
    for (let i = num - 1; i >= 1; i--) num *= i
    return num
}

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

const Slider = (props) => {
    const [slide, setSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(false)

    const text = useInputWithValidation("")
    const textArea = useInputWithValidation("")

    const textColor = text.validateInput() ? "text-danger" : null

    const myRef = useRef(null)

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    const focusMyRef = () => {
        myRef.current.focus()
    }

    const factorial = useMemo(() => {
        return countFactorial(slide)
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? "red" : "blue"
    }), [slide])

    const getSomeImages = useCallback(() => {
        return [
           /*  "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg", */
            "https://www.planetware.com/photos-large/I/italy-florence-cathedral-of-santa-maria-del-fiore.jpg"
        ]
    }, [])

    useEffect(() => {
        document.title = `Slide: ${slide}`
    }, [slide])

    useEffect(() => {
        /* console.log("autoplay") */
    }, [autoplay])

    useEffect(() => {
        /* console.log("style") */
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages} />
                <div className="text-center" style={style}>Factorial from counter: { factorial }</div>
                <div className="text-center min-h-48">
					Counter: { slide } 
					<br/> 
					{ autoplay ? "auto" : null }
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
                        onClick={toggleAutoplay}>
                        Toggle autoplay
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
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])

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

function App() {
	return (
        <div className="flex">
            <Slider/>
        </div>
	)
}

export default App