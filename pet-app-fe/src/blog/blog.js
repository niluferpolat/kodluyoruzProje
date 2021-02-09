import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../actions/post';
import { Divider, List, Layout } from 'antd';
import { useSelector } from 'react-redux';
import Post from './post';
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
import './blog.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const Blog = () => {
	const { Footer } = Layout;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);
	const posts = useSelector((state) => state.posts.posts);
	return (
		<>
			<div className="blogHeader"></div>
			<Divider />
			<Swiper
				className="swiper-container2"
				navigation
				spaceBetween={50}
				effect="coverflow"
				grabCursor="true"
				centeredSlides="true"
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
				<SwiperSlide className="swiper-slide">
					<img src="/image/Binnaz.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Boncuk.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Diana.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/kopus.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Mia.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/papagan.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/sila.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Screenshot_1.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Screenshot_2.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Screenshot_3.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/image/Screenshot_4.jpg" alt="" className="swiper-wrapper" />
				</SwiperSlide>
				...
			</Swiper>
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
			<Footer className="site-footer">Petstagram ©2020 Created by IN</Footer>
		</>
	);
};
export default Blog;
