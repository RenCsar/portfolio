import styled from "styled-components"

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    ${flexCenter};
    justify-content: space-between;
    width: 100%;
    padding: 20px 25px;

    & .logo-container {
        & img {
            height: 46px;
            width: 158px;
        }
    }

    & .nav-container {
        & ul {
            justify-content: space-between;
            display: flex;
            list-style-type: none;
            gap: 10px;
            width: 300px;

            & li {
                
                & a {                    
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
`