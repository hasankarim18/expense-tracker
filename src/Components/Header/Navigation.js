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
import { signOutFunc, isUserSingedIn, isUserSignedOUt } from '../../Redux/actionCreators'
import Spinner from '../UI/Spinner';



const mapStateToProps = state => {
    return {
        iLoginFormOpen: state.expense.iLoginFormOpen,
        isSignOutLoading: state.expense.isSignOutLoading,
        isSignOutSuccess: state.expense.isSignOutSuccess,
        isSignOutFailed: state.expense.isSignOutFailed,
        isUserSignedIn: state.expense.isUserSignedIn,
        isUserSignedOut: state.expense.isUserSignedOut
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOutFunc: () => dispatch(signOutFunc()),
        //  isUserSingedIn: () => dispatch(isUserSingedIn()),
        // isUserSignedOUt: () => dispatch(isUserSignedOUt())
    }
}



class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loginModal: false,
            signUpModal: false,
            signOutModal: false
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

    showSignOut = () => {
        this.setState({
            signOutModal: !this.state.signOutModal,
            loginModal: false,
            signUpModal: false
        })
    }

    onSingOut = () => {
        this.props.signOutFunc()
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

                            {
                                this.props.isUserSignedOut ?
                                    <>
                                        <NavItem>
                                            <NavLink onClick={this.showLogin} >Login</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink onClick={this.showSignUp} >Sign Up</NavLink>
                                        </NavItem>
                                    </>
                                    : null
                            }


                            {
                                this.props.isUserSignedIn ?
                                    <NavItem>
                                        <NavLink onClick={this.onSingOut} >
                                            <div className="d-flex" >
                                                <span onClick={this.showSignOut} className="me-2" >
                                                    Sgin Out
                                                </span>
                                                {
                                                    this.props.isSignOutLoading ?
                                                        <span>
                                                            <Spinner />
                                                        </span>
                                                        : null
                                                }

                                            </div>
                                        </NavLink>
                                    </NavItem>

                                    : null
                            }

                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                    {
                        showLoginModal
                    }

                </div>
                {
                    this.state.signOutModal ?
                        <MyModal onClose={this.showSignOut} > Sing out successfully
                            <LoginForm />
                        </MyModal>
                        : ''
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)