import React from 'react';
import './footerDefault.css';
import { Link } from 'react-router-dom';

function FooterDefault() {
	return (
		<div className="footer">
			<div className="up-footer">
				<Link className="footer-links" to="#">
					<i class="fab fa-facebook-f" />
					&nbsp;Facebook
				</Link>
				<Link className="footer-links" to="#">
					<i class="fab fa-twitter" />
					&nbsp;Twitter
				</Link>
				<Link className="footer-links" to="#">
					<i class="fab fa-instagram" />
					&nbsp;Instagram
				</Link>
				<Link className="footer-links" to="#">
					<i class="fab fa-github" />
					&nbsp;Github
				</Link>
				<Link className="footer-links" to="#">
					<i class="fab fa-tumblr" />
					&nbsp;Tumblr
				</Link>
			</div>
			<hr />
			<div className="down-footer">
				<Link className="footer-links2" to="/home">
					Anasayfa
				</Link>
				<Link className="footer-links2" to="#">
					Hakkımızda
				</Link>
				<Link className="footer-links2" to="/posts">
					Blog
				</Link>
				<Link className="footer-links2" to="#">
					Galeri
				</Link>
				<Link className="footer-links2" to="#">
					İletişim
				</Link>
			</div>
		</div>
	);
}
export default FooterDefault;
