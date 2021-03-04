import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
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

                                            <Button
                                                label='gotosignup'
                                                onClick={(e) => this.props.setActiveTab('signUp')}
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

Login.propTypes = {
    setActiveTab: PropTypes.func.isRequired
}

export default Login;