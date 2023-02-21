import styled from "styled-components";

export const Section = styled.section`
    padding: var(--padding-central);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    > h1 {
        color: var(--verde);
        font-size: 32px;
        border-bottom: 2px solid var(--verde);
        margin-bottom: 20px;
    }
    
    & .carousel-container {
        height: 530px;
        width: 100%;
        margin-bottom: 20px;
    }
`