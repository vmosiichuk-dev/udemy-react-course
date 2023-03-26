import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const reactElement = <h2>Hello o‿o!</h2>;
// const element = React.createElement("h2", {className: "title"}, "Hello o‿o!");
const text = "Hello O‿o!";

const el = (
	<div>
		<h2 className="title">{text} {["2+2", "="]}{2+2}</h2>
		<label htmlFor="inp">
			<input id="inp" type="text" />
		</label>
		<button tabIndex={0}>Submit</button>
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	el
/* 	<React.StrictMode>
		<App />
 	</React.StrictMode> */
);