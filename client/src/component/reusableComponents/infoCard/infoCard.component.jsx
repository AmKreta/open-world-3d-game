import React, { useState, useContext, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './infoCard.styles.scss';

//importing reusable components
import Icon from '../icon/icon.component';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

//importing context
import CurrentUserContext from '../../globalContext/currentUser.context';
import ThemeContext from '../../theme/themeContext/theme.context';


//creating animations
const IconVariants = {
    initial: { scale: 1.5, y: -10, opacity: 0, originX: 0, originY: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    transition: { stiffness: 120 }
}

const InfoCard = ({ _id, firstName, lastName, userName, role, level, ownedPowerups, profilePic, profileLikes }) => {

    const [hasLiked, setHasLiked] = useState(false);
    const currentUserId = useContext(CurrentUserContext)._id;
    const theme = useContext(ThemeContext);

    useEffect(() => {
        //fetch  if current user has liked this user
    }, []);

    const toggleLike = useCallback(() => {
        setHasLiked(prevState => !prevState);
    }, []);

    return (
        <div className="infoCard">
            <div className="profilePic" style={{ maxHeight: '100px', overflow: 'hidden' }}>
                {
                    profilePic && <img src={profilePic} alt='@dp ' />
                }
            </div>
            <div className="userName">
                <p>{userName}</p>
            </div>
            <div className="fullName">
                <p>{firstName + ' ' + lastName}</p>
            </div>
            <div className="profileLikes">
                {
                    hasLiked
                        ?
                        <motion.div variants={IconVariants} initial='initial' animate='animate' transition='transitions'>
                            <Icon className={`${theme} danger text`} onClick={toggleLike}>
                                <AiFillHeart />
                            </Icon>
                        </motion.div>
                        : <Icon color='#ccc' onClick={toggleLike}>
                            <AiOutlineHeart />
                        </Icon>
                }
            </div>
            <div className="role">
                {role === 'cop' || role === 'criminal' ? role : null}
            </div>
            <div className="level">
                level:-{level}
            </div>
            <div className="profileLikes">
                {profileLikes}
            </div>
        </div>
    );
}

export default React.memo(InfoCard);