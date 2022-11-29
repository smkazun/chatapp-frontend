import React from 'react';

export interface SideBarProps {
    children?: React.ReactNode | React.ReactNode[]
};

const SideBar = (props: SideBarProps) => {
    return (
        <div className="friend-list-sidebar">
            <div className="friend-list-sidebar-icon1">
                <div className="icon1-inner">
                    <img src={"LogoIcon"} alt="Logo" width="30" />
                </div> 
            </div> 
        </div> 
    );
}

export default SideBar;