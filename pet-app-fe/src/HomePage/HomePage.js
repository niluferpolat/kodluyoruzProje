import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider, List, Layout } from 'antd';
import { useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from '../blog/post'
import Adopt from "../adopt/Adopt"
import { fetchFourPosts } from '../actions/post'
import Navbar from "../components/Navbar"
import { fetchFourAdopt } from '../actions/adopt'
import './HomePage.css'
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default function HomePage() {
	const { Footer } = Layout;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchFourPosts());
	}, [dispatch]);
	useEffect(() => {
		dispatch(fetchFourAdopt());
	}, [dispatch]);
	const posts = useSelector((state) => state.posts.posts);
	const adopts = useSelector((state) => state.adopts.adopts);
	return (
		<div>
			<Navbar />
			<Swiper
				className="swiper-container-hp"
				autoplay={{ delay: 3000 }}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide className="swiper-slide">
					<img src="/image/homeHeader.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/adoptHeader.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/vetHeader.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/blogHeader.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				...
			</Swiper>
			<Divider />
			<List
				className="listItems"
				grid={{ gutter: 1, column: 4 }}
				dataSource={adopts}
				renderItem={(item) => (
					<List.Item>
						<Adopt {...item} />
					</List.Item>
				)}
			/>
			<Divider />
			<div>
				<p class="home-blog-title">
					Bir milletin büyüklüğü ve ahlaki gelişimi, hayvanlara olan davranış biçimi ile
					değerlendirilir.
					<p class="home-blog-footer">-Mahatma Gandhi</p>
				</p>
			</div>
			<Divider />
			<div>
				<Link class="home-blog-link">
					<i class="fas fa-cat"/>Petstagram Blog<i class="fas fa-cat"/>
				</Link>
				<List
					className="list-home2"
					grid={{ gutter: 2, column: 2 }}
					dataSource={posts}
					renderItem={(item) => (
						<List.Item>
							<Post {...item} />
						</List.Item>
					)}
				/>
				<Divider />
				<div>
					<p class="home-blog-title">
						Bir kedinin dostluğu tonlarca ilaçtan daha şifalıdır.
						<p class="home-blog-footer" style={{ marginLeft: 600 }}>
							-Enzo Jannacci
						</p>
					</p>
				</div>
				<Divider />
			</div>
		</div>
	);
}
