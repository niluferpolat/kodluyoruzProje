import './Home.css';
import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
const Home = ({ history }) => {
	const handleSignin = () => {
		history.push('/signin');
	};
	return (
		<div id="home">
			<video autoPlay loop>
				<source src="/Video/home-video.mp4" type="video/mp4" />
			</video>
			<div className="Home">
				<ul>
					<Link className="item-home" exact to="/">
						Anasayfa
					</Link>
				</ul>
				<hr />
				<ul>
					<Link className="item-home" to="/adoption">
						Sahiplen
					</Link>
				</ul>
				<hr />
				<ul>
					<Link className="item-home" to="/map">
						En Yakın Veteriner
					</Link>
				</ul>
				<hr />
				<ul>
					<Link className="item-home" href="/posts">
						Blog
					</Link>
				</ul>
				<hr />
				<ul>
					<button className="btn-home" onClick={handleSignin}>
						Giriş <i className="fas fa-paw"></i>
					</button>
				</ul>
			</div>
		</div>
	);
};

export default withRouter(Home);
