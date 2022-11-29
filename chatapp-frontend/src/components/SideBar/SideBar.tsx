import React from 'react';
import {Box, Grid} from '@mui/material';

export interface SideBarProps {
    children?: React.ReactNode | React.ReactNode[]
};

const SideBar = (props: SideBarProps) => {
    return (
        <Grid item xs={4} className="friend-list-sidebar">
            <Box className="friend-list-sidebar-icon1">
                <Box className="icon1-inner">
                    <img src={"LogoIcon"} alt="Logo" width="30" />
                </Box> 
            </Box> 
            <Box className="friend-list-sidebar-icon2">
                <Box className="icon2-inner">
                    <img src={"LogoIcon"} alt="Second" width="30" />
                </Box> 
            </Box>


            {/*TODO: add more sidebar options*/}
        </Grid> 
    );
}

export default SideBar;