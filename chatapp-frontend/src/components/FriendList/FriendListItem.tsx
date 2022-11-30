import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvater from '@mui/material/ListItemAvatar';
import { Avatar, Typography } from '@mui/material';


export interface FriendListItemProps {
    fullname: string,
    message: string,
    avatar?: string //TODO:
}

const FriendListItem = ({fullname, message, avatar}: FriendListItemProps) => {

    return(

        <ListItem alignItems="flex-start">

            <ListItemAvater>
                <Avatar alt="Kitty" src="/assets/logo.JPEG" />
            </ListItemAvater>

            <ListItemText
                primary={fullname}
                secondary={
                    <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {message}
                  </Typography>
                }
            />
        </ListItem>
    );
}

export default FriendListItem;
