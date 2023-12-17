import React, { StrictMode } from "react"
import ReactDOMClient from "react-dom/client"
import App from "./components/App"
// import App from "./App"
// import TestComponent from "./TestComponent"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const container = document.getElementById("root")
const root = ReactDOMClient.createRoot(container)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)