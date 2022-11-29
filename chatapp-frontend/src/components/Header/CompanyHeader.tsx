import React from 'react';
import Box from '@mui/material/Box';

type CompanyHeaderProps = {
    companyName?: string
};

const CompanyHeader = (props: CompanyHeaderProps) => {
    return (
        <Box className="friend-list-header">
            <h1>{props.companyName}</h1>
        </Box>
    );
}

export default CompanyHeader;