import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { MdFavorite, MdSearch, MdMap, MdCollections, MdHome } from 'react-icons/md';


//exports the navbar used for mobile
export function Nav2() {
	return (
		<div>
			<Navbar expand="sm" className="mb-0 nav2">
				<Container>
					<NavLink exact={true} to="/" activeClassName="nav2Active">
						<span className="navIconSearch">
							<MdHome />
						</span>
					</NavLink>
					<NavLink to="/feed" activeClassName="nav2Active">
						<span className="navIconSearch">
							<MdCollections />
						</span>
					</NavLink>
					<NavLink to="/map" activeClassName="nav2Active">
						<span className="navIconSearch">
							<MdMap />
						</span>
					</NavLink>
					<NavLink to="/search" activeClassName="nav2Active">
						<span className="navIconSearch">
							<MdSearch />
						</span>
					</NavLink>
					<NavLink to="/saved" activeClassName="nav2Active">
						<span className="navIconAbout">
							<MdFavorite />
						</span>
					</NavLink>
				</Container>
			</Navbar>
		</div>
	);
}
