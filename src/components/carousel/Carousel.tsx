import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Container } from "./Carousel.Styled";

export default function Carousel() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">Slide 1</SwiperSlide>
        <SwiperSlide className="slide">Slide 2</SwiperSlide>
        <SwiperSlide className="slide">Slide 3</SwiperSlide>
        <SwiperSlide className="slide">Slide 4</SwiperSlide>
        <SwiperSlide className="slide">Slide 5</SwiperSlide>
        <SwiperSlide className="slide">Slide 6</SwiperSlide>
        <SwiperSlide className="slide">Slide 7</SwiperSlide>
        <SwiperSlide className="slide">Slide 8</SwiperSlide>
        <SwiperSlide className="slide">Slide 9</SwiperSlide>
      </Swiper>
    </Container>
  );
}