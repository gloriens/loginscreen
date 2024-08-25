import React from 'react';
import { styled } from "@mui/material/styles";
import theme from "@/app/themes/theme";

interface ImageDisplayProps {
    imageUrl: string;
}

// ImageDisplayerFrameComponent'i styled fonksiyonuyla oluşturuyoruz
const ImageDisplayerFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.ImageDisplayerFrameComponent?.styleOverrides?.root,
}));

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
    return (
        <ImageDisplayerFrameComponent>
            <img src={imageUrl} style={{ width: '100%', height: 'auto' }} />
        </ImageDisplayerFrameComponent>
    );
}

export default ImageDisplay;
