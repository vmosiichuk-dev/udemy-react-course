import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { Container } from "react-bootstrap"
import "./App.css"

const countTotal = (num) => {
    console.log("counting...")
    return num * 10
}

const Slider = (props) => {
    const [slide, setSlide] = useState(0)
    // const [autoplay, setAutoplay] = useState(false)

    const [text, setText] = useState("")

    // const myRef = useRef(null)
    const myRef = useRef(1)

    useEffect(() => {
        myRef.current++
        console.log(myRef.current)
    })
/* 
    const focusMyRef = () => {
        myRef.current.focus()
    }
 */
    const getSomeImages = useCallback(() => {
        return [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://www.planetware.com/photos-large/I/italy-florence-cathedral-of-santa-maria-del-fiore.jpg"
        ]
    }, [])

    function logging() {
        console.log("log")
    }

    useEffect(() => {
        document.title = `Slide: ${slide}`

        window.addEventListener("click", logging)
        return () => window.removeEventListener("click", logging)
    }, [slide])

    function changeSlide(i) {
        setSlide(slide => slide + i)
    }
/* 
    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    useEffect(() => {
        console.log("autoplay")
    }, [autoplay])
 */
    const total = useMemo(() => {
        return countTotal(slide)
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? "red" : "blue"
    }), [slide])

    useEffect(() => {
        console.log("style")
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <Slide getSomeImages={getSomeImages} />
                <div className="text-center" style={style}>Total slides: { total }</div>
                <div className="text-center min-h-48">
					Active slide: { slide } 
					<br/> 
					{/* { autoplay ? "auto" : null } */}
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
                        onClick={() => myRef.current++}>
                        Set focus on input - {text}
                    </button>
                    <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text" />
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
            className="d-block w-100"  
            />
        )}
    </>)
}

function App() {
    const [slider, setSlider] = useState(true)

	return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
		    { slider ? <Slider/> : null }
        </>
	)
}

export default App