import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LogoDark from '../images/Logo-Blue.png';

//exports the nav bar used on all screens larger than medium
export function MainNav() {
	return (
		<div>
			<Navbar expand="sm" className="mb-0 mainNav">
				<Container>
					<NavLink to="/feed" activeClassName="mainNavActive">
						<span className="navText">Feed</span>
					</NavLink>
					<NavLink to="/map" activeClassName="mainNavActive">
						<span className="navText">Map</span>
					</NavLink>
					<NavLink to="/">
						<span className="navText">
							<img className="logoNav justify-content-center" src={LogoDark} alt="ShotHub" />
						</span>
					</NavLink>
					<NavLink to="/search" activeClassName="mainNavActive">
						<span className="navText">Search</span>
					</NavLink>
					<NavLink to="/saved" activeClassName="mainNavActive">
						<span className="navText">Saved</span>{' '}
					</NavLink>
				</Container>
			</Navbar>
		</div>
	);
}
