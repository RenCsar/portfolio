import { NavContainer, StyledNavLink } from './Nav.Styled';

const Nav = () => {

    const menuItems = [
        { to: 'sobremim', label: 'Sobre mim' },
        { to: 'portfolio', label: 'Portfólio' },
        { to: 'contato', label: 'Contato' },
    ];

    return (
        <NavContainer>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.to}>
                        <StyledNavLink
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={800}
                            activeClass="active"
                            className="nav-item"
                        >
                            {item.label}
                        </StyledNavLink>
                    </li>
                ))}
            </ul>
        </NavContainer>
    )
}

export default Nav;