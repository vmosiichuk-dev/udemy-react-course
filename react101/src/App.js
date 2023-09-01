import {Component, StrictMode} from "react";
import "./App.css";

const Title = () => {
	return <h2>Hello World!</h2>
}

const Input = () => {
	const placeholder = "Type here";
	const stylefield = {
		width: "300px"
	};
	return <input 
			placeholder={placeholder} 
			style={stylefield} 
			type="text" />
}

class Field extends Component {
	render() {
		const placeholder = "Type here";
		const stylefield = {
			width: "300px"
		};
		
		return <input 
				placeholder={placeholder} 
				style={stylefield} 
				type="text" />
	}

}

function Button() {
	/* const text = "Submit";
	return <button>{text}</button> */
	/* const submit = () => {
		return "Submit";
	}
	return <button>{submit()}</button> */
	/* return <button>{3+4}</button> */
	/* const p = <p>Submit</p>
	return <button>{p}</button> */
	const text = "Submit";
	const success = true;
	/* return <button>{if (success) {
		return "Success";
	}}</button> */
	/* if (success) {
		text = "Success";
	} */
	return <button>{success ? "Success" : text}</button>
}

function App() {
	return (
		<div className="App">
			<StrictMode>
				<Title />
			</StrictMode>
			<Input />
			<Field />
			<Button />
		</div>
	);
}

export {Title};
export default App;
