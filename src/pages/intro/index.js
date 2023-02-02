import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SignIn from '../../components/SignIn';

function Intro (){
    return(
        <div className="intro_container">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className='intro_swiper_item'>
                        <div className='margin_bt'>
                            <h2>" 약 복용을 잊으셨나요? "</h2>
                        </div>
                        <div className='margin_bt'>
                            <img src={process.env.PUBLIC_URL + '/static/images/alarm.jpg'} alt="알람기능소개" />
                        </div>
                        <p>제 시간에 복용하기 힘든 약,</p>
                        <p>복용 시간에 맞춰 알려드려요!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='intro_swiper_item'>
                        <div className='margin_bt'>
                            <h2>" 사진으로 쉽게 찾는 약 "</h2>
                        </div>
                        <div className='margin_bt'>
                            <img src={process.env.PUBLIC_URL + '/static/images/photo.jpg'} alt="사진검색 기능소개" />
                        </div>
                        <p>일일이 검색하기 힘든 약,</p>
                        <p>사진 한 장으로 쉽게 찾아드려요!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='intro_swiper_item'>
                        <div className='margin_bt'>
                            <h2>" 내 손안의 작은 약국 "</h2>
                        </div>
                        <div className='margin_bt'>
                            <img src={process.env.PUBLIC_URL + '/static/images/hand.jpg'} alt="handimedi" />
                        </div>
                        <Link to="/home" className="intro_swiper_item_btn">
                            지금 시작하기
                        </Link>
                        <SignIn />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Intro; 