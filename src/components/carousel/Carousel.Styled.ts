import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    
    & .mySwiper {
        width: 100%;
        height: 100%;
        background-color: var(--preto-bg);
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
        align-items: center;
        background-color: green;
    }
`