//https://www.sohamkamani.com/typescript/rest-http-api-call/
//https://bobbyhadz.com/blog/typescript-http-request-axios
import axios from 'axios';
import { resourceLimits } from 'worker_threads';

const basePath = 'chatApp';

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


//returns all friends with most recent message in preview
//TODO: this assumes it is coming from db, REWORK for end-to-end encryption
export const fetchFriendsListPreview = async (userId: number) : Promise<FriendListPreview[]> => {
    const url = `${basePath}/user/${userId}/friendsListPreview`;
    
    try{
        const response = await axios.get<FriendListPreview[]>(url);
        //do stuff with response

        return response.data;
    }
    catch(error){
        console.log(`ERROR: ${error}`);
    }
    return [];
}




//https://blog.openreplay.com/integrating-axios-with-react-hooks/
export const fetchFriendsList = async (userId: number) : Promise<Friend[]> => {
    const url = `${basePath}/user/${userId}/friends`;
    
    try{
        const response = await axios.get<Friend[]>(url);
        //do stuff with response

        return response.data;
    }
    catch(error){
        console.log(`ERROR: ${error}`);
    }
    return [];
}


//TODO: rework
export const fetchMessageList = async (userId: number, friendId: number) : Promise<Message[]> => {
    const url = `${basePath}/messages/user/${userId}/friend/${friendId}`;
    
    try{
        const response = await axios.get<Message[]>(url);
        //do stuff with response

        return response.data;
    }
    catch(error){
        console.log(`ERROR: ${error}`);
    }
    
    return [];
}