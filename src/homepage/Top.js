import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import TopSwipediv from "/Users/apple/webinars/src/homepage/TopSwipediv.js"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './topstyle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Top() {
    return (

<>
     
           <Swiper
      spaceBetween={20}
      slidesPerView={3}
     navigation
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      <SwiperSlide className="slidetop"><TopSwipediv/></SwiperSlide>
      
      ...
    </Swiper> 
       </>
    )
}

export default Top
