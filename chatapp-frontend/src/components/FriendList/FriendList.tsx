import React, {useState, useEffect} from 'react';
import {Box, List, Divider} from '@mui/material';
import {FriendListItem} from '..';
import {fetchFriendsListPreview} from '../../api/api';


export interface FriendListProps {
    children?: React.ReactNode | React.ReactNode[];
    error?: boolean,
    loading?: boolean, //TODO:
    filters: object
};

type Friend = {
    userId: number,
    firstName: string,
    lastName?: string, //TODO:
}

type Message = {
    text: string,
    dateReceived?: Date //TODO:
}

type FriendListPreview = {
    userId: number,
    firstName: string,
    lastName?: string, //TODO:
    message: string
}


const FriendList = ({children, error = false, loading, filters}: FriendListProps) => {

    const [friendsListPreview, setFriendsListPreview] = useState<FriendListPreview[] | null>([]);
    const [messages, setMessages] = useState<Message[] | null>([]);

    //TODO: fix
    //best way is probably to get a map of most
    //recent messages for each friend via singular api call
    //(join friends table with messages table, get most recent) <- if not doing end-to-end (gotta research this more)
    
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
        <FriendListItem key={index} fullname={item.firstName + ' ' + item.lastName} message={item.message} />
    );

    return(
        <List>
            {listItems}
        </List>
    );
}

export default FriendList;
