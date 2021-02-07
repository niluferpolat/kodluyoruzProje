import React, { Fragment, useState } from 'react';
import './Navbar/Navbar.css';
import { isAuthenticated, logout } from '../helpers/auth';
import { NavLink, withRouter } from 'react-router-dom';
import Button from './Navbar/Button';

const Navbar = ({ history }) => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const handleLogout = (event) => {
		logout(() => {
			history.push('/signin');
		});
	};
	const handleSignin = () => {
		history.push('/signin');
	};
	const showNavigation = () => (
		<nav className="NavbarItems">
			<div className="nav-container">
				<NavLink exact to="/" className="navbar-logo">
					Petstagram.com <i className="fas fa-paw"></i>
				</NavLink>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					{!isAuthenticated() && (
						<Fragment>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									Anasayfa
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/adoption"
									className="nav-links"
								>
									Sahiplen
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/"
									className="nav-links"
								>
									Veterinerim
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/posts"
									className="nav-links"
								>
									Blog
								</NavLink>
							</li>
							<li>
								<Button onClick={handleSignin} activeClassName="active">
									Giriş Yap
								</Button>
							</li>
						</Fragment>
					)}
					{isAuthenticated() && isAuthenticated().role === 0 && (
						<Fragment>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/adoption"
									className="nav-links"
								>
									Sahiplen
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="#"
									className="nav-links"
								>
									Veterinerim
									</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/posts"
									className="nav-links"
								>
									Blog
									</NavLink>
							</li>

						</Fragment>
					)}
					{isAuthenticated() && isAuthenticated().role === 1 && (
						<Fragment>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									Anasayfa
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/adoption"
									className="nav-links"
								>
									Sahiplen
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/"
									className="nav-links"
								>
									Veterinerim
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/posts"
									className="nav-links"
								>
									Blog
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={handleClick}
									activeClassName="active"
									exact
									to="/admin/dashboard"
									className="nav-links"
								>
									Panel
								</NavLink>
							</li>
						</Fragment>
					)}
					{isAuthenticated() && (
						<Fragment>
							<li>
								<Button onClick={handleLogout} activeClassName="active">
									Çıkış Yap
								</Button>
							</li>
						</Fragment>
					)}
				</ul>
				<div className="nav-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
			</div>
		</nav>
	);
	return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Navbar);
