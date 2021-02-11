import './Home.css';
import { Link, withRouter } from "react-router-dom"
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
				<Link className="item" exact to="/" >Anasayfa</Link>
				<hr />
				<Link className="item" to="/adoption">Sahiplen</Link>
				<hr />
				<Link className="item" to="/map">En Yakın Veteriner</Link>
				<hr />
				<Link className="item" href="/posts">Blog</Link>
				<hr />
				<button className="btn" onClick={handleSignin}>
					Giriş <i className="fas fa-paw"></i>
				</button>
			</div>

		</div>
	);
}

export default withRouter(Home);

