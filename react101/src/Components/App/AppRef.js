import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    /*
    emailRef = React.createRef()
 
    componentDidMount() {
        this.emailRef.current.focus()
    }
 */
    setInputRef = element => {
        this.inputRef = element
    }

    focusFirst = () => {
        if (this.inputRef) {
            this.inputRef.focus()
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com" 
                        ref={this.setInputRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirst} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

class TextInput extends Component {
    doSmth = () => console.log("smth")

    render() {
        return (
            <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com" />
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;
