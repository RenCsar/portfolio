import { TButton } from "../../utils/types/types";
import { Container } from "./Button.Styled";

const Button = ({ texto, link }: TButton) => {
    return (
        <Container link={link}>
            <a href={link} target="_blank">
                <button
                    disabled={link == "" ? true : false}
                >
                    {texto}
                </button>
            </a>
        </Container>
    )
}

export default Button;