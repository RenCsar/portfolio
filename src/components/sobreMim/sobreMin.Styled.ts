import styled from "styled-components";

export const Container = styled.section`   
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    height: 604px;

    & .text-container{
        width: 550px;
        display: flex;
        flex-direction: column;

        & p {
            color: var(--branco)
        }
       
        > :nth-child(1) {
            font-size: 18px;
        }
        > :nth-child(2) {
            font-size: 48px;
            color: var(--verde);
        }
        > .descricao {
            font-size: 15px;
        }

        & .button-container {
            margin-top: 20px;
        }
        
    }
    
    
    & .img-container {        
        
        & .foto-container {
            height: 450px;

            & img {
                height: 450px;
                width: 442px;
            }
        }
    }
`