import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './sigUp.styles.scss';

//importing themeContext
import ThemeContext from '../../theme/themeContext/theme.context';
import CurrentUserContext from '../../globalContext/currentUser.context';

//importing reusable components
import Button from '../../reusableComponents/button/button.component';
import Input from '../../reusableComponents/inputs/input.component';

class SignUp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            firstName: { value: '', err: false },
            lastName: { value: '', err: false },
            age: { value: '', err: false },
            userName: { value: '', err: false },
            email: { value: '', err: false },
            password1: { value: '', err: false },
            password2: { value: '', err: false }
        }

        this.animation = {
            initial: { x: '100vw' },
            animate: { x: 0 },
            transition: { type: 'spring', stiffness: 100 },
        }
    }

    setFirstName = (e) => {
        this.setState({ firstName: { value: e.target.value, err: false } });
    }

    setLastName = (e) => {
        this.setState({ lastName: { value: e.target.value, err: false } });
    }

    setUserName = (e) => {
        this.setState({ userName: { value: e.target.value, err: false } });
    }

    setEmail = (e) => {
        this.setState({ email: { value: e.target.value, err: false } });
    }

    setAge = (e) => {
        this.setState({ age: { value: e.target.value, err: false } });
    }

    setPassword1 = (e) => {
        this.setState({ password1: { value: e.target.value, err: false } })
    }

    setPassword2 = (e) => {
        this.setState({ password2: { value: e.target.value, err: false } })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    theme => (
                        <CurrentUserContext.Consumer>
                            {
                                ({ setCurrentUser }) => (
                                    <motion.div className={`${theme} AuthSignUp`} {...this.animation}>
                                        <div style={{ width: '90%', margin: 'auto' }}>
                                            <Input
                                                label='First Name'
                                                type='text'
                                                onChange={this.setFirstName}
                                                value={this.state.firstName.value}
                                            />
                                            <Input
                                                label='Last Name'
                                                type='text'
                                                onChange={this.setLastName}
                                                value={this.state.lastName.value}
                                            />
                                            <Input
                                                label='User Name'
                                                type='text'
                                                onChange={this.setUserName}
                                                value={this.state.userName.value}
                                            />
                                            <Input
                                                label='Age'
                                                type='number'
                                                onChange={this.setAge}
                                                value={this.state.age.value}
                                            />
                                            <Input
                                                label='E-mail'
                                                type='e-mail'
                                                onChange={this.setEmail}
                                                value={this.state.email.value}
                                            />
                                            <Input
                                                label='Password'
                                                type='password'
                                                onChange={this.setPassword1}
                                                value={this.state.password1.value}
                                            />
                                            <Input
                                                label='Confirm Password'
                                                type='password'
                                                onChange={this.setPassword2}
                                                value={this.state.password2.value}
                                            />
                                            <Button
                                                label='goto signUp page'
                                                onClick={() => this.props.setActiveTab('login')}
                                                className={`${theme} primary outlined`}
                                            />
                                        </div>
                                    </motion.div>
                                )
                            }
                        </CurrentUserContext.Consumer>
                    )
                }
            </ThemeContext.Consumer>
        );
    }
}

SignUp.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}

export default SignUp;