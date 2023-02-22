import styled from "styled-components";
import Imagem from '../../assets/img-projetos/tech-shopping.png'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    
    & .mySwiper {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        & .swiper-button-next::after, .swiper-button-prev::after {
            color: var(--verde);
        };

        & .swiper-pagination-bullet-active {
            background-color: var(--verde);
        }
    }

    & .slide {
        height: 100%;
        display: flex;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #5280E2;

        & .tec-container{
            color: var(--branco);
            display: flex;
            gap: 10px;
            
            & .item-container {
                border: 1px solid var(--branco);
                padding: 1px 6px;
                border-radius: 16px;
            }
        }
    }
`