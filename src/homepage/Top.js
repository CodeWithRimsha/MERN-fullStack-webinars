import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import TopSwipediv from "/Users/apple/fyp-webinars/webinars/src/homepage/TopSwipediv.js"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './topstyle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Top() {
    return (

<>
     
           <Swiper className="Swiper"
      spaceBetween={20}
      slidesPerView={3}
     navigation
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="row">
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      <div className="col-md-4">
      <SwiperSlide ><TopSwipediv/></SwiperSlide>
      </div>
      </div>
      ...
    </Swiper> 
  
       </>
    )
}

export default Top
