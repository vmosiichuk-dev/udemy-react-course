import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./Components/App/App";
import { StyledButton } from "./Components/App/App";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"))

const NewButton = styled(StyledButton)`
	margin: 0 auto;
	width: 565px;
`;

const active = true;

root.render(
	<StrictMode>
		<App active={active} />
			<NewButton as="a">INDEX.JS</NewButton>
	</StrictMode>
);