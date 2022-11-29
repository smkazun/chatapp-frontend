import React, {FC} from 'react';
import Chat from './components/Chat';
import {ChannelListContainer, ChannelContainer} from './components';


type AppProps = {
    appName?: string
};


//annotate the return type so an error is raised if you accidentally return some other type
const App:FC<AppProps> = (props) => {

    return (
        <div className="app-wrapper">
            
                <Chat>
                    <ChannelListContainer />
                    
                    <ChannelContainer />
                </Chat>
            <h1>{props.appName}</h1>
        </div>
    );
}

export default App;