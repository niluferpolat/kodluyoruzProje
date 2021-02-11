import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export default function HomePage() {
	return (
		<Swiper
			className="swiper-container"
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
				<img src="/image/blogHeader.jpg" alt="" className="swiper-wrapper" />
			</SwiperSlide>
			<SwiperSlide className="swiper-slide">
				<img src="/image/adoptHeader.jpg" alt="" className="swiper-wrapper" />
			</SwiperSlide>
			...
		</Swiper>
	);
}
