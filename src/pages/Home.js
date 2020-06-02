import React from 'react';
import { Carousel} from 'react-bootstrap';
import Logo from '../images/logo-white.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import FadeIn from 'react-fade-in';
import {Link} from 'react-router-dom';
var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

export class Home extends React.Component {
	componentDidMount() {
		document.title = 'ShotHub | Home';
	}

	//handles the first scroll button
	scrollHandler() {
		scroller.scrollTo('scrollTo', {
			duration: 1000,
			smooth: true
		});
	}

	//handles the second scroll button
	scrollHandler2() {
		scroller.scrollTo('scrollTo2', {
			duration: 1000,
			smooth: true
		});
	}

	render() {
		//images used in carousel
		const images = [
			[ 'https://live.staticflickr.com/5549/31018313350_7d76655473_h.jpg', 'Roman Baths, Bath' ],
			[ 'https://live.staticflickr.com/4468/37352372540_5a09d007f5_h.jpg', 'Winchester Cathedral, Winchester' ],
			[ 'https://live.staticflickr.com/65535/49768288488_38c7853457_h.jpg', 'Eden Project, Cornwall' ],
			[ 'https://live.staticflickr.com/65535/49414885632_3c7802b5b3_h.jpg', 'York Minster, York' ],
			[ 'https://live.staticflickr.com/5125/5294713338_417002f65c_h.jpg', 'Stone Henge, Salisbury' ],
			[ 'https://live.staticflickr.com/2429/32973015625_d09cb603bb_h.jpg', 'Canterbury Cathedral, Canterbury' ]
		];

		return (
			<div>
				<div className="containerHome overlay" id="homeDiv1">
					<FadeIn childClassName="homeLogo" transitionDuration="1000">
						<img src={Logo} alt="ShotHub" className="homeLogo" />
					</FadeIn>

					<button className="homeButton" onClick={this.scrollHandler}>
						<MdKeyboardArrowDown />
					</button>
				</div>
				<div name="scrollTo" className="containerHome" id="homeDiv2">
					<h2 id="homeh2">Discover the best photo spots the UK has to offer</h2>
					<button className="homeButton2" onClick={this.scrollHandler2}>
						<MdKeyboardArrowDown />
					</button>
				</div>
				<div name="scrollTo2" className="containerHome" id="homeDiv3">
					<h1 className="homeh1"><Link to="/search">Find your next photo</Link></h1>
					<Carousel className="homeCarousel" controls={false} interval="4000" indicators={false} wrap={true} pause={false}>
						{images.map((image, i) => {
							return (
								<Carousel.Item className="homeCarousel" key={i}>
									<div className="overlay">
										<img src={image[0]} alt={image[1]} className="homeCarouselImg homeCarousel" />
									</div>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>
			</div>
		);
	}
}