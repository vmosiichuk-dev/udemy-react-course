// import logo from './logo.svg';
import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello o-O!</h2>;
}

const Field = () => {
	const pHolder = "Enter text",
		  fieldStyles = {
			width: "300px"
		  };
	return <input 
			placeholder={pHolder} 
			type="text" 
			style={fieldStyles}/>;
}

class FieldClass extends Component {
	render() {
		const pHolder = "Enter text",
		fieldStyles = {
		  width: "150px"
		};

		return <input 
				placeholder={pHolder} 
				type="text" 
				style={fieldStyles}/>;
	}
}

function Button() {
	/* const p = <p>Submit</p>;
	const text = () => {
		return "Submit";
	} */
	const text = "Submit",
		  done = false;

	// return <button>{text()}{p}</button>;
	return <button>{done ? "Done" : text}</button>;
}

function App() {
  return (
	<div className="App">
		<StrictMode>
			<Header/>
		</StrictMode>
		<Field/>
		<FieldClass/>
		<Button/>
	</div>
  );
}

export {Header};
export default App;
