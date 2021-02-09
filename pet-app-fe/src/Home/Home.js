import './Home.css';
import { Link } from "react-router-dom"
function Home({ history }) {
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
					<Link to="/" >Anasayfa</Link>
				</ul>
				<hr />
				<ul>
					<Link to="/adoption">Sahiplen</Link>
				</ul>
				<hr />
				<ul>
					<Link to="/">En Yakın Veteriner</Link>
				</ul>
				<hr />
				<ul>
					<Link href="/posts">Blog</Link>
				</ul>
				<hr />
				<ul>
					<button className="btn" onClick={handleSignin}>
						Giriş <i className="fas fa-paw"></i>
					</button>
				</ul>
			</div>
		</div>
	);
}

export default Home;
