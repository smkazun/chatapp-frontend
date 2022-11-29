import React, {useState, useEffect, SyntheticEvent} from 'react';
//import chat context
//import {SearchIcon} from '../assets';

/*
Component that allows searching of friends
*/
const FriendSearch = () => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);


    //returns your friends by text input
    const getFriends = async (text: string) => {
        try{
            //TODO: fetch friends
        }
        catch(error){
            setQuery('');
        }
    }
    
    //
    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);
        setQuery((e.target as HTMLTextAreaElement).value);
        getFriends((e.target as HTMLTextAreaElement).value);
    }


    return(
        <div className="friend-search-container">
            <div className="friend-search-input-wrapper">
                <div className="friend-search-input-icon">
                    {/**<SearchIcon /> */}


                    
                </div>
                <input
                    className="friend-search-input-text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div> 
        </div> 
    );
}

export default FriendSearch;