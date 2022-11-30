import React from 'react';
//import LogoIcon from '../assets/logo.JPEG'; //add icons (svg) later
import {FriendSearch, FriendList, SideBar} from '..';
//import Cookies from 'universal-cookie';
import {Box, Grid} from '@mui/material';




const FriendListContainer = () => {
    return (
        <Grid item xs={4}>
            <Grid container>
                <SideBar />
                <Box className="friend-list-list-wrapper">
                    <FriendSearch />
                    <FriendList 
                        filters={{}}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default FriendListContainer;