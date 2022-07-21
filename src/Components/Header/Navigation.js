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
import { connect } from 'react-redux'
import MyModal from '../UI/MyModal';
import SignUpForm from '../Auth/SignUpForm';
import LoginForm from '../Auth/LoginForm';



const mapStateToProps = state => {
    return {
        iLoginFormOpen: state.expense.iLoginFormOpen
    }
}





class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loginModal: false,
            signUpModal: false
        };
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    showLogin = () => {
        // this.props.toggleLogin()
        this.setState({
            loginModal: !this.state.loginModal,
            signUpModal: false
        })
    }

    showSignUp = () => {
        this.setState({
            signUpModal: !this.state.signUpModal,
            loginModal: false
        })
    }




    render() {
        let showLoginModal = null

        if (this.state.loginModal === true && this.state.isOpen === false) {

            showLoginModal = <MyModal onClose={this.showLogin} ><LoginForm /></MyModal>
        } else if (this.state.signUpModal === true && !this.state.loginModal) {
            showLoginModal = <MyModal onClose={this.showSignUp} ><SignUpForm /></MyModal>
        }
        else {

            showLoginModal = null
        }



        return (
            <div className="bg-light" >
                <Navbar className="container" color="light" light expand="md">
                    <NavbarBrand href="/">Expense Tracker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.showLogin} >Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.showSignUp} >Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                    {
                        showLoginModal
                    }

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Navigation)