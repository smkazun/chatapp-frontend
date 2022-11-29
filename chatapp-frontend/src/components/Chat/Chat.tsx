import React from 'react';
import {Grid} from '@mui/material';

export interface ChatProps {
    children: React.ReactNode | React.ReactNode[]
};

const Chat = ({children}: ChatProps) => {
    return (
        <Grid container>
            {children}
        </Grid>
    );
}

export default Chat;