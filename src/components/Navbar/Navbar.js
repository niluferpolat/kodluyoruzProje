import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from '../Button';
import './Navbar.css';

class Navbar extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="NavbarItems">
				<h1 className="navbar-logo">
					PetHelp.com <i className="fas fa-paw"></i>
				</h1>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-paw'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
				<Button>Giriş Yap</Button>
			</nav>
		);
	}
}

export default Navbar;
