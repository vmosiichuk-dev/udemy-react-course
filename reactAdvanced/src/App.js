import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

/* 
const fn = (a) => {
    return (b) => {
        console.log(a + b)
    }
}

fn(1)(2) // 3


const fn = (a) => {
    return class extends Component {
        render() {
            return <h1>Hello world!</h1>
        }
    }
}
*/

const SliderFirst = (props) => {
    return (
        <Container>
            <div className="w-50 border mt-5 p-3 m-auto">
                <img className="d-block w-90" alt="Slide" src="https://www.planetware.com/photos-large/I/italy-florence-cathedral-of-santa-maria-del-fiore.jpg" />
                <div className="text-center">Active slide: { props.slide } ({props.name})</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>
                        -1
                    </button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>
                        +1
                    </button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = ({ slide, autoplay, changeSlide, setAutoplay }) => {
    return (
        <Container>
            <div className="w-50 border mt-5 p-3 m-auto">
                <img className="d-block w-90" alt="Slide" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                <div className="text-center">
                    Active slide: { slide }
                    <br/>
                    { autoplay ? "Autoplay is active" : null }
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
                        onClick={() => setAutoplay(autoplay => !autoplay)}>
                        Toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

const withSlider = (BaseComponent, getData) => {
    return (props) => {
        const [slide, setSlide] = useState(0)
        const [autoplay, setAutoplay] = useState(false)
    
        useEffect(() => {
            setSlide(getData())
        }, [])
    
        function changeSlide(i) {
            setSlide(slide => slide + i)
        }

        return <BaseComponent 
            {...props}
            slide={slide} 
            autoplay={autoplay} 
            setAutoplay={setAutoplay}
            changeSlide={changeSlide} 
        />
    }
}

const getDataFromFirstFetch = () => { return 10 }
const getDataFromSecondFetch = () => { return 20 }

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)

const withLogger = ContainerComponent => props => {
    useEffect(() => {
        console.log("first render")
    }, [])

    return <ContainerComponent {...props} />
}

const HelloWorld = () => {
    return (
        <h1>Hello World!</h1>
    )
}

const HelloWorldWithLogger = withLogger(HelloWorld)

function App() {
    return (
        <>
            <HelloWorldWithLogger />
            <SliderWithFirstFetch name="name" />
            <SliderWithSecondFetch />
        </>
    )
}

export default App