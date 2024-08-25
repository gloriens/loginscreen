'use client'
import React, { useState } from 'react'
import { styled, Box, Tabs, Tab, Typography } from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";

const TabDisplayerFrameComponent = styled(Box, {
    name: 'TabDisplayerFrameComponent',
    slot: 'Root'
})(({ theme }) => ({
    ...theme.components?.TabDisplayerFrameComponent?.styleOverrides?.root,
}));

const TabDisplayer: React.FC = ({}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <TabDisplayerFrameComponent>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'space-around' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label ="Home" sx={{
                        fontSize: '20px',
                        color: '#5e5e5e',    
                        textTransform: 'none'
                    }} />
                    <Tab label ="About Us" sx={{
                        fontSize: '20px',
                        color: '#5e5e5e',
                        textTransform: 'none'
                    }} />
                    <Tab label ="Blog" sx={{
                        fontSize: '20px',

                        color: '#5e5e5e',
                        textTransform: 'none'
                    }} />
                    <Tab label ="Pricing" sx={{
                        fontSize: '20px',
                        color: '#5e5e5e',
                        textTransform: 'none'
                    }} />
                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'space-around' }}>
                {value === 0 && <ImageDisplayer imageUrl={"bisiklet.png"}>

                </ImageDisplayer>}
                {value === 1 && <Typography>Tab 2 Content</Typography>}
                {value === 2 && <Typography>Tab 3 Content</Typography>}
                {value === 3 && <Typography>Tab 4 Content</Typography>}
            </Box>
        </TabDisplayerFrameComponent>
    );
}

export default TabDisplayer;
