import React from 'react';
import { Carousel } from 'react-bootstrap';


export function ControlledCarousel(props) {
	return (
		<Carousel.Item className={props.className}>
			<div className="overlay">
				<img className="card-img "
					alt="" 
					src={
						//constructing a link to the image of the first photo in the spot array
						'https://farm' +
						props.photo.farm +
						'.staticflickr.com/' +
						props.photo.server +
						'/' +
						props.photo.id +
						'_' +
						props.photo.secret +
						'.jpg'
					}
					onError={(e) => e.target.src='https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png' }
				/>
			</div>
			<Carousel.Caption>
				<a
					className="overlay-text"
					target="_blank"
					rel="noopener noreferrer"
					href={'https://www.google.com/maps/search/?api=1&query=' + props.photo.lat + ',' + props.photo.lon}
				>
					View on Google Maps
				</a>
				<br />
				<a //constructing a link to url where the photo was originally posted
					className="overlay-text"
					target="_blank"
					rel="noopener noreferrer"
					href={'https://flickr.com/' + props.photo.owner + '/' + props.photo.id}
				>
					View on Flickr
				</a>
			</Carousel.Caption>
		</Carousel.Item>
	);
}
