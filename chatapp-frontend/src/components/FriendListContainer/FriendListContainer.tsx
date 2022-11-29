import React from 'react';
//import LogoIcon from '../assets/logo.JPEG'; //add icons (svg) later
import {FriendSearch, FriendList, SideBar} from '..';
//import Cookies from 'universal-cookie';
import {Box, Grid} from '@mui/material';




const FriendListContainer = () => {
    return (
        <Grid item xs={2}>
            <Grid container>
                <SideBar />
                <Box className="friend-list-list-wrapper">
                    <FriendSearch />
                    <FriendList 
                        filters={{}}
                        type='team'
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default FriendListContainer;