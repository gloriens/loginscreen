import React from 'react';
import { Typography } from "@mui/material";

const TopTexts = () => {
    return (
        <div>
            <Typography
                fontWeight='bold'
                fontSize='30px'
                sx={{
                    color: '#0C31F1',
                    '@media (max-width: 600px)': {
                        fontSize: '24px',
                    },
                }}
            >
                Digital
            </Typography>
            <Typography
                fontWeight='bold'
                fontSize='36px'
                paddingTop='80px'
                sx={{
                    color: '#0C31F1',
                    '@media (max-width: 600px)': {
                        fontSize: '28px',
                    },
                }}
            >
                Artificial Intelligence Driving Results For The Travel Industry
            </Typography>
            <Typography
                paddingTop='25px'
                sx={{
                    color: '#00000099',
                    '@media (max-width: 600px)': {
                        fontSize: '14px',
                    },
                }}
            >
                Welcome back! Please login to your account.
            </Typography>
        </div>
    );
}

export default TopTexts;
