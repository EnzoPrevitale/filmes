import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Banner() {
    return (
        <section id='banner'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide>
                    <div className='slide slide1'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide slide2'></div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}