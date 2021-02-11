import './Home.css';
import { isAuthenticated, logout } from '../helpers/auth'
import { Link, withRouter } from 'react-router-dom';
import { Fragment } from "react"
const Home = ({ history }) => {
	const handleSignin = () => {
		history.push('/signin');
	};
	const handleLogout = (event) => {
		logout(() => {
			history.push('/signin');
		});
	};
	return (
		<div id="home">
			<video autoPlay loop>
				<source src="/Video/home-video.mp4" type="video/mp4" />
			</video>
			<div className="Home">
				<ul className="home-ul">
					<Link className="item-home" to="/home">
						Anasayfa
					</Link>
				</ul>
				<hr />
				<ul className="home-ul">
					<Link className="item-home" to="/adoption">
						Sahiplen
					</Link>
				</ul>
				<hr />
				<ul className="home-ul">
					<Link className="item-home" to="/map">
						Veterinerim
					</Link>
				</ul>
				<hr />
				<ul className="home-ul">
					<Link className="item-home" to="/posts">
						Blog
					</Link>
				</ul>
				<hr />
				{!isAuthenticated() && (
					<Fragment>
						<ul className="home-ul">
							<button className="btn-home" onClick={handleSignin}>
								Giriş <i className="fas fa-paw" />
							</button>
						</ul>
					</Fragment>
				)}
				{isAuthenticated() && (
					<Fragment>
						<ul className="home-ul">
							<button className="btn-home" onClick={handleLogout}>
								Çıkış <i className="fas fa-paw" />
							</button>
						</ul>
					</Fragment>
				)}

			</div>
		</div>
	);
};

export default withRouter(Home);