import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))
/*
const reactElement = React.createElement("h2", {className: "title"}, "Hello World!")
 
const reactElement = {
	type: "h2",
	props: {
		className: "title",
		children: "Hello World!"
	}
}
 */

// {{}} Object Object

const text = "Hello World!"
const reactElement = (
	<div>
		<h2 className="title">Title: {text}</h2>
		<input type="text" />
		<button tabIndex={0}>Submit</button>
	</div>
)

root.render(
	reactElement,
	<React.StrictMode>
		<App />
		{/*reactElement*/}
	</React.StrictMode>
);