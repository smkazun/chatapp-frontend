import React from 'react';

export interface ChatProps {
    children: React.ReactNode | React.ReactNode[]
};

const Chat = ({children}: ChatProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Chat;