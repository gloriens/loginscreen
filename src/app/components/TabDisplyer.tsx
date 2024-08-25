'use client'
import React from 'react'
import {styled, Box, Grid, Typography, Stack, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";
import theme from "@/app/themes/theme";

interface Props {
    text: string;
}

const TabDisplayerFrameComponent = styled(Box, {
    name: 'TabDisplayerFrameComponent',
    slot: 'Root'
})(({ theme }) => ({
   ...theme.components?.TabDisplayerFrameComponent?.styleOverrides?.root,
}));

const TabDisplayer: React.FC<Props> = ({text}) => {
    return (
        <TabDisplayerFrameComponent>

        </TabDisplayerFrameComponent>
    )
}