import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Title} from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<StrictMode>
		<App>
			<Title/>
		</App>
	</StrictMode>
);