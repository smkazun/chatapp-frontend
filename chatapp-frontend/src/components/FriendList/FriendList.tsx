import React from 'react';

import Box from '@mui/material/Box';


export interface FriendListProps {
    children?: React.ReactNode | React.ReactNode[];
    error?: boolean,
    loading?: boolean, //TODO:
    type: string,
    filters: object
};


const FriendList = ({children, error = false, loading, type, filters}: FriendListProps) => {

    if(error)
    {
        return type === 'team' ? (
            <Box className="team-friend-list">
                <p className="team-friend-list-message">
                    Error, please try again.
                </p>

            </Box>
        ) : null
    }

    if(loading){
        return (
            <Box className="team-friend-list">
                <p className="team-friend-list-message-loading">
                    {type === 'team' ? 'Friends' : 'Messages'} loading...
                </p>

            </Box>
        );
    }

    return (
        <Box className="team-friend-list">
            <Box className="team-friend-list-header">
                <p className="team-friend-list-header-title">
                {type === 'team' ? 'Friends' : 'Direct Messages'}
                </p>
                {/*TODO: add button*/}
            </Box>
            {children}
        </Box>
    );
}

export default FriendList;
