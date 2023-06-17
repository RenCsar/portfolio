import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Container } from "./Carousel.Styled";
import projetos from '../../utils/projetos.json'
import { TProjetos } from "../../utils/types/types";
import Button from "../button/Button";

export default function Carousel() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
            <div className="container-geral">
              <div className="title-container">
                <p>{el.nome}</p>
              </div>
              <div className="img-container">
                <img src={el.img} alt="Imagem do projeto" />
              </div>
              <div className="tec-container">
                {el.tecnologias.map((elem: string) =>
                  <div className="item-container" key={`${elem}-${index}`}>
                    <p>{elem}</p>
                  </div>
                )}
              </div>
              <div className="btn-container">
                <Button texto={'Repositório'} link={el.repositorio} />
                <Button texto={'Site'} link={el.site} />
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
}