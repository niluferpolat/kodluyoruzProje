import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomePage.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

function HomePage() {
	const slides = [];

	for (let i = 0; i < 5; i += 1) {
		slides.push(
			<SwiperSlide key={`slide-${i}`} tag="li">
				<img src={`https://picsum.photos/id/${i + 1}/2000/700`} alt={`Slide ${i}`} />
			</SwiperSlide>,
		);
	}

	return (
		<React.Fragment>
			<Swiper
				id="main"
				tag="section"
				wrapperTag="ul"
				navigation
				pagination
				spaceBetween={0}
				slidesPerView={1}
				onInit={(swiper) => console.log('Swiper initialized!', swiper)}
				onSlideChange={(swiper) => {
					console.log('Slide index changed to: ', swiper.activeIndex);
				}}
				onReachEnd={() => console.log('Swiper end reached')}
			>
				{slides}
			</Swiper>
		</React.Fragment>
	);
}
export default HomePage;
