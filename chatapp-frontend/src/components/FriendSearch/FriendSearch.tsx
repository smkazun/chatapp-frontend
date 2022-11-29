import React, {useState, useEffect, SyntheticEvent} from 'react';
import {Box, Grid} from '@mui/material';
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
        <Box className="friend-search-container">
            <Grid container className="friend-search-input-wrapper">
                <Grid item xs={2} className="friend-search-input-icon">
                    {/**<SearchIcon /> */}
                    

                    
                </Grid>
                <input
                    className="friend-search-input-text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </Grid> 
        </Box> 
    );
}

export default FriendSearch;