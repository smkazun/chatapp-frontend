import React, {useState, useEffect} from 'react';
import {Box, List, Divider} from '@mui/material';
import {FriendListItem} from '..';
import {fetchFriendsListPreview} from '../../api/api';
import {FriendListPreview, Friend, Message} from '../../types/types';


export interface FriendListProps {
    children?: React.ReactNode | React.ReactNode[];
    error?: boolean,
    loading?: boolean, //TODO:
    filters: object
};



const FriendList = ({children, error = false, loading, filters}: FriendListProps) => {

    const [friendsListPreview, setFriendsListPreview] = useState<FriendListPreview[] | null>([]);
    
    //TODO:
    //const{userId} = useContext(UserContext);

    //useEffect when a message is received, should update postion in list
    
    useEffect(() => {

        const userId = 1;


        fetchFriendsListPreview(userId).then((data) => {
            setFriendsListPreview(data);
        });
        
        
   
    }, []);

    const updateFriendMessages = async () => {
        //TODO: call api, cache on server or client ??
      };


    //The below is temporary, for learnings sake (and review) //TODO: remove
    /*const friendArr: Friend[] = Array.from(messageMap!, ([key]) => {
        return {firstName: key, lastName: ''};
    });*/




    //friends?.forEach(friend => )
    //setMessages(fetchMessageList());

    const listItems = friendsListPreview?.map((item, index) => 
        <FriendListItem key={index} fullname={item.firstName + ' ' + item.lastName} message={item.message.text} />
    );

    return(
        <List>
            {listItems}
        </List>
    );
}

export default FriendList;
