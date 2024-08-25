import React from 'react';
import {Stack, Typography} from "@mui/material";

const BottomText = () => {
    return (
        <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            display='flex'
            paddingTop='70px'
            width='100%'
        >
            <Typography fontSize='18px' marginLeft='0px' sx={{ color: '#00000099' }}>
                Or Login With
            </Typography>
            <Typography fontWeight='bold' fontSize='18px' sx={{ color: '#3751FE' }}>
                Facebook
            </Typography>
            <Typography fontWeight='bold' fontSize='18px' sx={{ color: '#3751FE' }}>
                Linkedln
            </Typography>
            <Typography fontWeight='bold' fontSize='18px' marginRight='25px' sx={{ color: '#3751FE' }}>
                Google
            </Typography>


        </Stack>
    );
}

export default BottomText;