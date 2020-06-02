import React from 'react';
import Container from 'react-bootstrap/Container';
import { Form, Col, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { MdLocationSearching, MdSearch } from 'react-icons/md';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			postcode: '',
		};
	}

	//acquire the users current location and pass it to the handler in App.js

	position = async () => { 
		await navigator.geolocation.getCurrentPosition((position) =>
			//pass data back to App.js
			this.props.handler(position.coords.latitude, position.coords.longitude)
		);
		this.props.history.push('/feed');
	};

	//handles when the text box is edited, storing it in state
	changeHandler = (event) => {
		this.setState({
			postcode: event.target.value
		});
	};

	//uses the postcode in state to get the latitude and longitude, and then passes this data to the handler in App.js
	handleSubmit = async (event) => {
		event.preventDefault();
		var postcode = encodeURI(this.state.postcode);

		await fetch('https://api.getthedata.com/postcode/' + postcode)
			.then((res) => res.json())
			.then((res) => {
				this.props.handler(JSON.parse(res.data.latitude), JSON.parse(res.data.longitude));
				this.props.history.push('/feed'); //return to the feed once the search has completed
			})
			.catch(function(err) { //catches if an invalid postcode is entered
				console.log(err);
				alert("Please enter a valid UK Postcode")
			});
	};

	//calls position when the page is loaded
	componentDidMount() {
		document.title = 'ShotHub | Search';
		//this.position();
	}

	render() {
		return (
			<Container className="containerMain">
				<h2>Find your next photo</h2>
				<p>Enter your postcode to search for spots!</p>
				<Form justify-content="center" onSubmit={this.handleSubmit}>
					<Form.Row>
						<Col md={{ span: 5, offset: 3 }} xs={{span: 8, offset: 1}}>
							<Form.Control
								type="postcode"
								placeholder="Enter a postcode..."
								value={this.state.postcode}
								onChange={this.changeHandler}
							/>
						</Col>
						<Col md={1} xs={2}>
							<Button className="justify-content-center" variant="primary" type="Submit">
								<MdSearch />
							</Button>
						</Col>
					</Form.Row>
				</Form>
				<br />
				<p>Or click below to use your current location</p>
				<Button variant="primary" onClick={() => this.position()}>
					<MdLocationSearching />
				</Button>
<br />
<br />
<br />
				<img src={require('../images/undraw_my_location_f9pr.svg')} alt="" style={{"alignSelf": "end"}}/>


			</Container>
		);
	}
}

export default withRouter(Search);
