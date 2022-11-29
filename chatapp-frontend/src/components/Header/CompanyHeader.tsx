import React from 'react';

type CompanyHeaderProps = {
    companyName?: string
};

const CompanyHeader = (props: CompanyHeaderProps) => {
    return (
        <div className="friend-list-header">
            <h1>{props.companyName}</h1>
        </div>
    );
}

export default CompanyHeader;