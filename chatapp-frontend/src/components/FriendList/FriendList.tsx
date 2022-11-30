import React, {useState, useEffect} from 'react';
import {Box, List, Divider} from '@mui/material';
import {FriendListItem} from '..';

//Time for DB design .... TESTING
//display most recent message
const messageMap = new Map<string, string>([
    ["Logan", "Youre so awesome Seb I wish I was you"],
    ["Dom", "Yo dt Nape tn?"],
    ["Kayla", "Come to milwakeeeeeeeeeee"],
    ["Mars", "Ill smack Logan for you dont you worry"],
]);

const showMessages = [
    {"name" : "Logan", "message": "Youre so awesome Seb I wish I was you"},
    {"name" : "Dom", "message": "Yo dt Nape tn?"},
    {"name" : "Kayla", "message": "Come to milwakeeeeeeeeeee"},
    {"name" : "Mars", "message": "Ill smack Logan for you dont you worry"},
    {"name" : "Ola", "message": "baaaaaaaahhhhhhhhhh"}
];

export interface FriendListProps {
    children?: React.ReactNode | React.ReactNode[];
    error?: boolean,
    loading?: boolean, //TODO:
    filters: object
};

type Friend = {
    firstName: string,
    lastName?: string, //TODO:
}

type Message = {
    text: string,
    dateReceived?: Date //TODO:
}


const FriendList = ({children, error = false, loading, filters}: FriendListProps) => {

    const [friends, setFriends] = useState<Friend[] | null>([]);
    const [messages, setMessages] = useState<Message[] | null>([]);

    //TODO: fix
    //best way is probably to get a map of most
    //recent messages for each friend via singular api call
    //(join friends table with messages table, get most recent) <- if not doing end-to-end (gotta research this more)
    const getFriendsList = async () => {
        try{
            //TODO: fetch 

        }catch(error){
            setFriends([]);
            //throw error, log in db
        }
    }

    const getMostRecentMessageList = async () => {
        try{

        }catch(error){
            setMessages([]);
            //throw error, log in db
        }
    }

    const updateFriendMessages = async () => {
        //TODO: call api, cache on server or client ??
      };


    //The below is temporary, for learnings sake (and review) //TODO: remove
    const friendArr: Friend[] = Array.from(messageMap!, ([key]) => {
        return {firstName: key, lastName: ''};
    });

    const messageArr: Message[] = Array.from(messageMap!, ([value]) => {
        return {text: value};
    });


    const listItems = showMessages.map((item, index) => 
        <FriendListItem key={index} fullname={item.name} message={item.message} />
    );

    return(
        <List>
            {listItems}
        </List>
    );
}

export default FriendList;
