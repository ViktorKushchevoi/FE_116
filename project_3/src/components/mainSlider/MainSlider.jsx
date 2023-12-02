import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/scss/_main_slider.scss';
import SingleSlide from '../singleSlide/SingleSlide';
function MainSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><SingleSlide /></SwiperSlide>
            <SwiperSlide><SingleSlide /></SwiperSlide>
            <SwiperSlide><SingleSlide /></SwiperSlide>
            <SwiperSlide><SingleSlide /></SwiperSlide>
        </Swiper>
    )
}
export default MainSlider