import React from 'react';
import Chat from './components/Chat/Chat';
import {FriendListContainer, ChannelContainer, CompanyHeader} from './components';
import Grid from '@mui/material/Grid';


type AppProps = {
    appName?: string
};


//annotate the return type so an error is raised if you accidentally return some other type
const App = (props: AppProps) => {

    return (
        <Grid container className="app-wrapper">
            
            <CompanyHeader companyName='Chat App'/>
            <Chat>
                <FriendListContainer />
                
                <ChannelContainer />
            </Chat>
        </Grid>
    );
}

export default App;