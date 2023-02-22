import styled from "styled-components";

const gradiente = `
    background: -webkit-linear-gradient(#15cdcb, #5280e2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Container = styled.section`
        padding: var(--padding-central);
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 600px;
        gap: 20px;
        margin-top: 50px;

        > h1 {
            margin-bottom: 20px;
            font-size: 32px;
            border-bottom-width: 2px;
            border-bottom-style: solid;
            border-image: -webkit-linear-gradient(#15cdcb, #5280e2) 1;
            ${gradiente};
        }
        
        > p{
            color: var(--branco);
        }
        
        & :nth-child(2) {
            width: 600px;
            text-align: center;
            margin-bottom: 20px;
        }
        & :nth-child(4) {
            ${gradiente};
        }
`