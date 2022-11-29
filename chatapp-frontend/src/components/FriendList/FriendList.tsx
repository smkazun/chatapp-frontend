import React from 'react';


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
            <div className="team-friend-list">
                <p className="team-friend-list-message">
                    Error, please try again.
                </p>

            </div>
        ) : null
    }

    if(loading){
        return (
            <div className="team-friend-list">
                <p className="team-friend-list-message-loading">
                    {type === 'team' ? 'Friends' : 'Messages'} loading...
                </p>

            </div>
        );
    }

    return (
        <div className="team-friend-list">
            <div className="team-friend-list-header">
                <p className="team-friend-list-header-title">
                {type === 'team' ? 'Friends' : 'Direct Messages'}
                </p>
                {/*TODO: add button*/}
            </div>
            {children}
        </div>
    );
}

export default FriendList;
