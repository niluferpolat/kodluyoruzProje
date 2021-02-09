import './Home.css';

function Home() {
	return (
		<div id="home">
			<video autoPlay loop>
				<source src="/Video/home-video.mp4" type="video/mp4" />
			</video>

			<div className="Home">
				<ul>
					<a href="./homePage">Anasayfa</a>
				</ul>
				<hr />
				<ul>
					<a href="./homePage">Sahiplen</a>
				</ul>
				<hr />
				<ul>
					<a href="./homePage">En Yakın Veteriner</a>
				</ul>
				<hr />
				<ul>
					<a href="./homePage">Blog</a>
				</ul>
				<hr />
				<ul>
					<button className="btn">
						Giriş <i className="fas fa-paw"></i>
					</button>
				</ul>
			</div>
		</div>
	);
}

export default Home;
