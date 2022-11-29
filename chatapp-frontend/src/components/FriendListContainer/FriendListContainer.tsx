import React from 'react';
//import LogoIcon from '../assets/logo.JPEG'; //add icons (svg) later
import {FriendSearch, FriendList, SideBar} from '..';
//import Cookies from 'universal-cookie';




const FriendListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="friend-list-list-wrapper">
                <FriendSearch />
                <FriendList 
                    filters={{}}
                    type='team'
                />
            </div>
        </>
    );
}

export default FriendListContainer;