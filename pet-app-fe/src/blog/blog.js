import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/post';
import { Divider, List, Layout } from 'antd';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Post from './post';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
import './blog.css';
import FooterDefault from '../components/FooterDefault/footerDefault';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import anime from 'animejs';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

/* 
const textWrapper = document.querySelector('.ml2');
textWrapper.dangerouslySetinnerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); */

anime
	.timeline({ loop: true })
	.add({
		targets: '.ml2 .letter',
		scale: [4, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: 'easeOutExpo',
		duration: 950,
		delay: (el, i) => 70 * i,
	})
	.add({
		targets: '.ml2',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000,
	});
const Blog = () => {
	const { Footer } = Layout;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	const posts = useSelector((state) => state.posts.posts);
	return (
		<>
			<Navbar />
			<div className="blogHeader">
				<h1 class="ml2">Petstagram Blog</h1>
			</div>
			<Divider />
			<Swiper
				className="swiperContainer2"
				autoplay={{ delay: 3000 }}
				tag="section"
				wrapperTag="ul"
				navigation
				spaceBetween={50}
				effect="coverflow"
				grabCursor="true"
				slidesPerView="auto"
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={{
					el: '.swiper-pagination',
					clickable: true,
				}}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Screenshot_3.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Screenshot_2.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Diana.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Boncuk.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Screenshot_4.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/kopus.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Mia.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/papagan.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/sila.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Screenshot_1.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide2">
					<img src="/image/Binnaz.jpg" alt="" className="swiper-wrapper2" />
				</SwiperSlide>
				...
			</Swiper>
			<Divider />
			<div className="quote-blog">
				<p class="home-blog-title">
					"Bir köpek bir çocuğa sadakat, dayanıklılık ve yatmadan önce kendi etrafında 3 kez dönmeyi
					öğretir."
				</p>
				<p class="blog-footer" style={{ marginLeft: 600 }}>
					-Robert Benchley
				</p>
			</div>
			<Divider />
			<div className="blogBody">
				<List
					className="list"
					grid={{ gutter: 5, column: 3 }}
					dataSource={posts}
					renderItem={(item) => (
						<List.Item>
							<Post {...item} />
						</List.Item>
					)}
				/>
			</div>
			<Divider />
			<FooterDefault />
			<Footer className="site-footer">Petstagram ©2020 Created by IN</Footer>
		</>
	);
};
export default Blog;
