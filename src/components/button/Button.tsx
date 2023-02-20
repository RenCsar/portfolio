import { TButton } from "../../utils/types/types"
import { Container } from "./Button.Styled"

const Button = ({ texto, link }: TButton) => {
    return (
        <Container>
            <a href={link} target="blank">
                <button>
                    {texto}
                </button>
            </a>
        </Container>
    )
}

export default Button