import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import axios from 'axios';
import './login.styles.scss';

//importing themeContext
import ThemeContext from '../../theme/themeContext/theme.context';
import CurrentUserContext from '../../globalContext/currentUser.context';

//importing reusable components
import Button from '../../reusableComponents/button/button.component';
import Input from '../../reusableComponents/inputs/input.component';

//importing icons
import { FaUserAlt } from 'react-icons/fa';
import { CgPassword } from 'react-icons/cg';

//importing services
import { LOGIN } from '../../services/services';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            requestSent: false,
            responseReceived: false
        }
        this.animation = {
            initial: { x: '100vw' },
            animate: { x: 0 },
            transition: { type: 'spring', stiffness: 100 },
        }
    }

    setUsername = (e) => {
        this.setState({ userName: e.target.value });
    }

    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }

    login = (setCurrentUser) => {
        let data = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios
            .post(LOGIN, data)
            .then(res => {
                localStorage.setItem('currentUser', JSON.stringify(res.data.payload));
                setCurrentUser(res.data.payload);
            })
            .catch(err => {
                console.log(err);
                alert('unable to login');
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
                                    <motion.div className={`${theme} AuthLogin`} {...this.animation}>
                                        <div style={{ width: '90%', margin: 'auto' }}>
                                            <Input
                                                label='Username'
                                                icon={<FaUserAlt />}
                                                value={this.state.userName}
                                                onChange={this.setUsername}
                                                type='text'
                                            />

                                            <Input
                                                label='Password'
                                                icon={<CgPassword />}
                                                value={this.state.password}
                                                onChange={this.setPassword}
                                                type='password'
                                            />

                                            <motion.div
                                                drag
                                                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                                            >
                                                <Button
                                                    label='login'
                                                    onClick={(e) => this.login(setCurrentUser)}
                                                    className={`${theme} primary outlined`}
                                                />
                                            </motion.div>
                                            <p>
                                                Don't have an account?
                                                <span
                                                    className={`${theme} primary text`}
                                                    onClick={(e) => this.props.setActiveTab('SignUp')}
                                                >
                                                    Sign Up
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

Login.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}

export default Login;