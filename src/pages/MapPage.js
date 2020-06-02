import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import { ControlledCarousel } from '../components/ControlledCarousel';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {Link} from 'react-router-dom';

export class MapPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lng: '',
			lat: '',
			zoom: 13
		};
	}

	//set state lat and lng to the props lat and lng
	UNSAFE_componentWillMount() {
		this.setState({
			lng: this.props.lng,
			lat: this.props.lat
		});	
	}

	componentDidMount(){
		document.title = 'ShotHub | Map';
	}

	render() {
		return (
			<div>
				{this.state.lat ? (
					<Map className="map" center={[ this.state.lat, this.state.lng ]} zoom={this.state.zoom}>
						<TileLayer
							attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
							url={'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'}
							subdomains="abcd"
							maxZoom="19"
						/>

						{this.props.spots.map((spot, i) => {
							return (
								/* put a pin on the map for each photo spot */
								<Marker key={i} position={[ spot[0].lat, spot[0].lon ]}>
									<Popup>
										{(() => {
											return (
												<Carousel
													className="popupImg"
													fade="true"
													interval="100000000000000000"
												>
													{spot.map((photo, k) => {
														let className;
														if (photo === this.props.spots[0]) {
															className = 'active';
														} else {
															className = '';
														}
														return (
															<ControlledCarousel
																key={k}
																photo={photo}
																className={className}
															/>
														);
													})}
												</Carousel>
											);
										})()}
									</Popup>
								</Marker>
							);
						})}
					</Map>
				) : (
					<Container className="containerMain">
					<div>
						<br />
						<img src={require('../images/undraw_location_search_bqps.svg')} alt="" />
						<br />
						<br />
						<br />
						<h5>
							ShotHub allows photographers to find the best nearby photo spots,<br />
							but you need to search first!
						</h5>
						<br />
						<Button variant="primary">
							<Link to="/search" className="noSearchButton">
								<h4 className="pt-0">Go to Search</h4>
							</Link>
						</Button>
					</div>
					</Container>
				)}
			</div>
		);
	}
}
