import React, {useContext, useEffect, useState} from 'react';
import { styled } from "@mui/material/styles";
import {Typography, Button, Box} from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";
import {Context} from "@/app/components/LoginPage";

const PinkyPromiseFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.PinkyPromiseFrameComponent?.styleOverrides?.root,
    textAlign: 'center',
    padding: '20px',
}));



const FollowCursorImage = styled('img')(({ theme }) => ({
    position: 'absolute',
    pointerEvents: 'none', // Fare etkileşimlerini kapatır
    transition: 'transform 0.1s ease', // yumuşak geçiş
}));

const PinkyPromise: React.FC = () => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0})
    const context = useContext(Context);

    if (!context) {
        throw new Error("Context is not provided");
    }
    const { loggedIn, setLoggedIn } = context;

    const handleLogin = () => {
            setLoggedIn(true);

    };

    useEffect(() => {
        const mousePosition = (event: MouseEvent) =>{
            setMousePos({x: event.clientX,y: event.clientY}) //farenin konumunu aldığın yer
        };
        window.addEventListener('mousemove', mousePosition);

        return () => {
            window.removeEventListener('mousemove', mousePosition);
        };
    }, []);
    return (
        <PinkyPromiseFrameComponent>
            <Typography marginBottom={"50px"} fontSize={"30px"} fontWeight={"bold"} variant="h6" color="black">
                Ooops! Looks like your password is wrong!
            </Typography>
            <Typography  fontWeight={"bold"} variant="h6" color="black">
                Do you pinky promise this is your account?
            </Typography>
            <Typography paddingTop={"15px"} variant="h6" color="gray">
                We Turst you Glorien!
            </Typography>
            <Box paddingTop={"50px"}
                onClick={() => {handleLogin()}}

                sx={{
                    width: '220px', height: '260px', marginTop: "25px"
                }}// Sayfayı yenileyerek geri dönmek için
            >
                <ImageDisplayer imageUrl={"promiseLeft.png"}/>
            </Box>
            <FollowCursorImage
                src="/pinkyRight.png"
                style={{
                    left: mousePos.x, //resmin olacağı kordinatlar
                    top: mousePos.y,
                    transform: 'translate(-10%, -50%)', //fareye göre resmin konumu
                    width: "230px",
                    height: "240px"
                }}
            />
        </PinkyPromiseFrameComponent>
    );
};

export default PinkyPromise;