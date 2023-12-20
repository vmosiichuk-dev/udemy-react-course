import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./app/store/reducer"
import App from "./app/App"
import "./index.css"

const container = document.getElementById("root")
const root = createRoot(container)
const store = createStore(reducer)
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)