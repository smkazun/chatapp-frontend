import React, {useState, useEffect, SyntheticEvent} from 'react';
//import chat context
//import {SearchIcon} from '../assets';


const ChannelSearch = () => {

    const [query, setQuery] = useState('');
    
    const onSearch = (e: SyntheticEvent) => {
        e.preventDefault();
    }


    return(
        <div className="channel-search-container">
            <div className="channel-search-input-wrapper">
                <div className="channel-search-input-icon">
                    {/**<SearchIcon /> */}


                    
                </div>
                <input
                    className="channel-search-input-text"
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                />
            </div> 
        </div> 
    );
}

export default ChannelSearch;