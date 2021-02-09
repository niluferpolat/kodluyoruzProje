import './Home.css';
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
				<ul className="home-ul">
					<Link className="item-home" to="/">
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
				<ul className="home-ul">
					<button className="btn-home" onClick={handleSignin}>
						Giriş <i className="fas fa-paw" />
					</button>
				</ul>
			</div>
		</div>
	);
};

export default withRouter(Home);
