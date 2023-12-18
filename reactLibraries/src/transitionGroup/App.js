import { useState } from "react"
import { Container } from "react-bootstrap"
// import { Transition } from "react-transition-group"
import { CSSTransition } from "react-transition-group"
import "./App.css"
/* 
const Modal = (props) => {
    const duration = 300

    const defaultStyle = {
        opacity: 0,
        visibility: "hidden",
        transition: `all ${duration}ms ease-in-out`,
    }

    const transitionStyles = {
        entering: { opacity: 1, visibility: "visible" },
        entered:  { opacity: 1, visibility: "visible" },
        exiting:  { opacity: 0, visibility: "hidden" },
        exited:   { opacity: 0, visibility: "hidden" }
    }

    // <Transition unmountOnExit />

    return (
        <Transition 
            in={props.showModal} 
            timeout={duration} 
            onEnter={() => props.setShowTrigger(false)}
            onExited={() => props.setShowTrigger(true)}
            >
            { state => (
                <div className="modal mt-5 d-block" style={{
                    ...defaultStyle, ...transitionStyles[state]
                    }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal window</h5>
                            <button 
                                onClick={() => props.onClose(false)} 
                                type="button" 
                                className="btn-close" 
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>
                        <div className="modal-footer">
                            <button 
                                onClick={() => props.onClose(false)} 
                                type="button" 
                                className="btn btn-secondary">
                                Close
                            </button>
                            <button 
                                onClick={() => props.onClose(false)} 
                                type="button" 
                                className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false)
    const [showTrigger, setShowTrigger] = useState(true)

    return (
        <Container>
            <Modal showModal={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            { showTrigger 
              ? <button 
                    type="button" 
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>
                    Open Modal
                </button>
              : null 
            }
        </Container>
    )
}
 */
const Modal = (props) => {
    const duration = 300
 /*    
    type: 'out-in'|'in-out'

    <SwitchTransition>
        <CSSTransition
            nodeRef={nodeRef}
            addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false)
            }}
        >
    </SwitchTransition>

// ----------------------------------------------------------------

    <TransitionGroup>
      {items.map(({ id, nodeRef }) => (
        <CSSTransition
          key={id}
          nodeRef={nodeRef}
          timeout={500}
        >
          <ListGroup.Item ref={nodeRef}>
            <Button
              className="remove-btn"
              variant="danger"
              size="sm"
              onClick={() =>
                setItems((items) =>
                  items.filter((item) => item.id !== id)
                )
              }
            >
                &times;
            </Button>
            {text}
            </ListGroup.Item>
        </CSSTransition>
        ))}
    </TransitionGroup>
 */
    return (
        <CSSTransition 
            in={props.showModal} 
            timeout={duration} 
            onEnter={() => props.setShowTrigger(false)}
            onExited={() => props.setShowTrigger(true)}
            classNames="modal"
            mountOnEnter
            unmountOnExit
            >
            <div className="modal mt-5 d-block">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal window</h5>
                        <button 
                            onClick={() => props.onClose(false)} 
                            type="button" 
                            className="btn-close" 
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body content</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            onClick={() => props.onClose(false)} 
                            type="button" 
                            className="btn btn-secondary">
                            Close
                        </button>
                        <button 
                            onClick={() => props.onClose(false)} 
                            type="button" 
                            className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false)
    const [showTrigger, setShowTrigger] = useState(true)

    return (
        <Container>
            <Modal showModal={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            { showTrigger 
              ? <button 
                    type="button" 
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>
                    Open Modal
                </button>
              : null 
            }
        </Container>
    )
}

export default App