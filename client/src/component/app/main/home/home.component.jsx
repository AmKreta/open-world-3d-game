import React from 'react';
import PropTypes from 'prop-types';
import './home.styles.scss';

//importing custom mcomponents
import Aside from './aside/aside.component';


const Home = ({ showAside }) => {
    return (
        <div className="homeContainer">
            <Aside {...{ showAside }} />
            <div className="home">
                <div className="addPost">
                    add post
               </div>
                <div className="posts">
                    posts
                </div>
            </div>
        </div>
    );
}

Aside.propTypes = {
    showAside: PropTypes.bool.isRequired
}

export default Home;