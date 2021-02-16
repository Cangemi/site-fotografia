import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Nav">
            <style>{'.Nav{background-color: #040404}'}</style>
            <Navbar dark expand="md">
                <Container>
                <NavbarBrand href="/"><img src="/logo.png"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink className="text-white" href="/">Quem sou eu</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="text-white" href="/">Portfólio</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="text-white" href="/">Nosso trabalho</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="text-white" href="/">Clientes</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="text-white" href="/">Pacotes</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Example;