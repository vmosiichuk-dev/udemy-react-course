import {Component, StrictMode} from "react";
import styled from "styled-components";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import "./App.scss";

export const StyledButton = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(255, 255, 255, .3);
	box-shadow: 1px 1px 35px rgba(255, 255, 255, .3);
`;

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0;
`;

const Cont = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 1px 1px 35px rgba(255, 255, 255, .3);
	a {
		display: block;
		margin: 10px 0;
		color: ${props => props.active ? "orangered" : "blue"};
	}
`;

const H3 = styled.h3`
	font-size: 22px;
	color: #fff;
`;

const Title = () => {
	return <h2 
			className="title"
			/* style={{
				fontSize: "2.5rem", 
				color: "red", 
				transition: "all", 
				WebkitTransition: "all", 
				msTransition: "all"
			}} */>
				<span>Hello World!</span>
			</h2>
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

const action = () => {
	alert("ACTION");
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}

	render() {
		return (
			<Wrapper>
				<StrictMode>
					<Title />
					<H3>Description</H3>
				</StrictMode>
				<Cont active>
					<Input />
					<Field />
					<Button />
					<StyledButton onClick={action}>
						ACTION
						<a href="google.com">lorem ipsum</a>	
					</StyledButton>
				</Cont>


				<Container className="mb-5 mt-5">
					<Row>
						<Col>1 of 2</Col>
						<Col>
							<Carousel>
								<Carousel.Item>
									<img alt="" text="First slide" src="https://developer.mozilla.org/pimg/aHR0cHM6Ly9zLnprY2RuLm5ldC9BZHZlcnRpc2Vycy9jOTNkNDZkYWQzOWI0ODQxYjViZmFmM2Q2MWY5MWUwMi5wbmc%3D.gQQg%2BnseACbpRZ3EBXomUnq99f45Jsy%2F5lXWXYgGB0s%3D" />
									<Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img alt="" text="Second slide" src="https://developer.mozilla.org/pimg/aHR0cHM6Ly9zLnprY2RuLm5ldC9BZHZlcnRpc2Vycy9jOTNkNDZkYWQzOWI0ODQxYjViZmFmM2Q2MWY5MWUwMi5wbmc%3D.gQQg%2BnseACbpRZ3EBXomUnq99f45Jsy%2F5lXWXYgGB0s%3D" />
									<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img alt="" text="Third slide" src="https://developer.mozilla.org/pimg/aHR0cHM6Ly9zLnprY2RuLm5ldC9BZHZlcnRpc2Vycy9jOTNkNDZkYWQzOWI0ODQxYjViZmFmM2Q2MWY5MWUwMi5wbmc%3D.gQQg%2BnseACbpRZ3EBXomUnq99f45Jsy%2F5lXWXYgGB0s%3D" />
									<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>
										Praesent commodo cursus magna, vel scelerisque nisl consectetur.
									</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Container>
			</Wrapper>
		)
	}
}

export {Title};
export default App;

/* One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away. */