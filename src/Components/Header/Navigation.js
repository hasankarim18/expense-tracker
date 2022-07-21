import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="bg-light" >
                <Navbar className="container" color="light" light expand="md">
                    <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}