import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './sigUp.styles.scss';

//importing themeContext
import ThemeContext from '../../theme/themeContext/theme.context';
import CurrentUserContext from '../../globalContext/currentUser.context';

//importing reusable components
import Button from '../../reusableComponents/button/button.component';
import Input from '../../reusableComponents/inputs/input.component';

//importing services
import { SIGN_UP } from '../../services/services';

class SignUp extends React.Component {
    constructor(props) {
        super();

        this.state = {
            fullName: { value: '', err: false },
            age: { value: '', err: false },
            userName: { value: '', err: false },
            email: { value: '', err: false },
            password1: { value: '', err: false },
            password2: { value: '', err: false },
            requestSent: false,
            responseReceived: false
        }

        this.animation = {
            initial: { x: '100vw' },
            animate: { x: 0 },
            transition: { type: 'spring', stiffness: 100 },
        }
    }

    setFullName = (e) => {
        this.setState({ fullName: { value: e.target.value, err: false } });
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

    signUp = (setCurrentUser) => {
        let data = {
            firstName: this.state.fullName.value.split(' ')[0],
            lastName: this.state.fullName.value.split(' ')[1],
            userName: this.state.userName.value,
            email: this.state.email.value,
            password: this.state.password1.value
        };

        axios
            .post(SIGN_UP, data)
            .then(res => {
                localStorage.setItem('currentUser', JSON.stringify(res.data.payload));
                setCurrentUser(res.data.payload)
            })
            .catch(err => {
                console.log(err);
                alert('unable to sign up');
            });
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
                                                label='Full Name'
                                                type='text'
                                                onChange={this.setFullName}
                                                value={this.state.fullName.value}
                                            />
                                            <Input
                                                label='User Name'
                                                type='text'
                                                onChange={this.setUserName}
                                                value={this.state.userName.value}
                                            />
                                            {/*<Input
                                                label='Age'
                                                type='number'
                                                onChange={this.setAge}
                                                value={this.state.age.value}
                                            />*/}
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
                                            <motion.div
                                                drag
                                                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                                            >
                                                <Button
                                                    label='sign Up'
                                                    onClick={() => this.signUp(setCurrentUser)}
                                                    className={`${theme} primary outlined`}
                                                />
                                            </motion.div>
                                            <p>
                                                Already have an account?
                                                <span
                                                    className={`${theme} primary text`}
                                                    onClick={(e) => this.props.setActiveTab('login')}
                                                >
                                                    login
                                                </span>
                                            </p>
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