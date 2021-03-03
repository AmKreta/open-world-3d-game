import React from 'react';
import './navBar.styles.scss';

//importing tabs names
import { GAME, SETTING, SHOP, PROFILE, CHAT } from '../../app/tabs/tabs';

//importing reusable components
import NavBarButton from '../navBarButton/navBarButton.component';

//importing icons
import { BsChatDotsFill, BsChatDots, BsPerson, BsPersonFill } from 'react-icons/bs';
import { AiFillShopping, AiOutlineShopping, AiFillSetting, AiOutlineSetting } from 'react-icons/ai';
import { IoGameController, IoGameControllerOutline } from 'react-icons/io5';

const NavBar = () => {
    return (
        <nav>
            <NavBarButton name={GAME} icon={<IoGameControllerOutline />} activeIcon={<IoGameController />} />
            <NavBarButton name={CHAT} icon={<BsChatDots />} activeIcon={<BsChatDotsFill />} />
            <NavBarButton name={PROFILE} icon={<BsPerson />} activeIcon={<BsPersonFill />} />
            <NavBarButton name={SHOP} icon={<AiOutlineShopping />} activeIcon={<AiFillShopping />} />
            <NavBarButton name={SETTING} icon={<AiOutlineSetting />} activeIcon={<AiFillSetting />} />
        </nav>
    );
}

export default NavBar;