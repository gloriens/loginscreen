import React, { useContext, useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";
import { Context } from "@/app/components/LoginPage";

interface PinkyPromiseProps {
    email: string;
}

const PinkyPromiseFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.PinkyPromiseFrameComponent?.styleOverrides?.root,
    textAlign: 'center',
    padding: '20px',
}));

const FollowCursorImage = styled('img')({
    position: 'absolute',
    pointerEvents: 'none', // Fare etkileşimlerini kapatır
    transition: 'transform 0.1s ease', // Yumuşak geçiş
});

const PinkyPromise: React.FC<PinkyPromiseProps> = ({ email }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const context = useContext(Context);

    if (!context) {
        throw new Error("Context is not provided");
    }

    const { setLoggedIn } = context;

    const handleLogin = () => {
        setLoggedIn(true); // Doğrudan giriş durumu güncelleniyor
    };

    useEffect(() => {
        const mousePosition = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
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
            <Typography fontWeight={"bold"} variant="h6" color="black">
                Do you pinky promise this is your account?
            </Typography>
            <Typography paddingTop={"15px"} variant="h6" color="gray">
                We trust you, {email}!
            </Typography>
            <Box
                paddingTop={"50px"}
                onClick={handleLogin}
                sx={{ width: '220px', height: '260px', marginTop: "25px" }}
            >
                <ImageDisplayer imageUrl={"promiseLeft.png"} />
            </Box>
            <FollowCursorImage
                src="/pinkyRight.png"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: 'translate(-10%, -50%)',
                    width: "230px",
                    height: "240px"
                }}
            />
        </PinkyPromiseFrameComponent>
    );
};

export default PinkyPromise;
