import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container } from "./Carousel.Styled";
import projetos from '../../utils/projetos.json'
import { TProjetos } from "../../utils/types/types";

export default function Carousel() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {projetos.map((el: TProjetos, index: number) =>
          <SwiperSlide
            className="slide"
            key={`${el.nome}-${index}`}
            style={{
              background: `url(${el.imgBg})`,
              backgroundSize: 'cover'
            }}
          >
            {el.nome}
            <div className="tec-container">
              {el.tecnologias.map((elem: string) =>
                <div className="item-container">
                  <p>{elem}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
}