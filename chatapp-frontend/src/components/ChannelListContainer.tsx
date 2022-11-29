import React from 'react';
//import LogoIcon from '../assets/logo.JPEG';

export interface SideBarProps {
    children?: React.ReactNode | React.ReactNode[]
};

const SideBar = (props: SideBarProps) => {
    return (
        <div className="channel-list-sidebar">
            <div className="channel-list-sidebar-icon1">
                <div className="icon1-inner">
                    <img src={"LogoIcon"} alt="Logo" width="30" />
                </div> 
            </div> 
        </div> 
    );
}

const CompanyHeader = () => {
    return (
        <div className="channel-list-header">
            <p className='channel-list-header-text'></p>
        </div>
    );
}


const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list-list=wrapper">
                <CompanyHeader />
            </div>
        </>
    );
}

export default ChannelListContainer;