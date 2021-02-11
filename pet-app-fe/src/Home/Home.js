import './Home.css';
<<<<<<< HEAD
import { Link, withRouter } from "react-router-dom"
=======
import { Link, withRouter } from 'react-router-dom';

>>>>>>> ae4030633956c56fb8db23451679ff9531dd1b19
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
<<<<<<< HEAD
				<Link className="item" to="/adoption">Sahiplen</Link>
				<hr />
				<Link className="item" to="/map">En Yakın Veteriner</Link>
				<hr />
				<Link className="item" href="/posts">Blog</Link>
=======
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
>>>>>>> ae4030633956c56fb8db23451679ff9531dd1b19
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
