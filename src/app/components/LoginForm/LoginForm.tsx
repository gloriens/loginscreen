import React, {useContext, useEffect, useState} from 'react';
import { styled } from "@mui/material/styles";
import {Button, Checkbox, FormControlLabel, Stack, TextField, Typography} from "@mui/material";
import theme from "@/app/themes/theme";
import PinkyPromise from "@/app/components/PinkyPromise";
import TopTexts from "@/app/components/LoginForm/LoginFormTopTexts";
import BottomText from "@/app/components/LoginForm/LoginFormBottomTexts";
import {Context} from "@/app/components/LoginPage";

interface EmailTextBoxProps {
    MailLabel?: string;
    passLabel?: string;
}
const EmailTextBoxFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.EmailTextBoxFrameComponent?.styleOverrides?.root,
}));

const EmailTextBox: React.FC<EmailTextBoxProps> = ({ MailLabel, passLabel }) => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Context is not provided");
    }

    const { loggedIn, setLoggedIn } = context;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pinkyPromise, setPinkyPromise] = useState(false);

    const handleLogin = () => {
        if (email === "Glorien" && password === "password123") {
            setLoggedIn(true);  // Giriş başarılı olursa loggedIn durumunu güncelle
        } else {
            setPinkyPromise(true);
        }
    };

    if (pinkyPromise) {
        return <PinkyPromise email={email} />;
    }


    return (
        <EmailTextBoxFrameComponent>
            <TopTexts />
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label={MailLabel}
                variant='outlined'
                fullWidth
                sx={{ marginBottom: '0' }}
            />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                variant='outlined'
                label={passLabel}
                type='password'
                fullWidth
                sx={{ marginBottom: '0' }}
            />
            <Stack
                direction='row'
                alignItems='flex-start'
                justifyContent='space-between'
                display='flex'
                width='100%'
            >
                <FormControlLabel control={<Checkbox />} label={"Remember Me"} />
                <Typography paddingTop='9px' sx={{ color: '#00000099' }}>
                    Forgot Password?
                </Typography>
            </Stack>

            <Stack
                direction='row'
                alignItems='flex-start'
                justifyContent='space-around'
                paddingTop='40px'
                width='80%'
            >
                <Button
                    variant="contained"
                    onClick={handleLogin}
                    sx={{
                        borderRadius: '0px',
                        backgroundColor: '#3751FE',
                        width: '129px',
                        height: '54px',
                        '&:hover': {
                            backgroundColor: '#2a389c',
                            border: '1px solid #2035c3',
                        },
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Login
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: '0px',
                        backgroundColor: '#ffffff',
                        color: '#3751FE',
                        borderColor: '#3751FE',
                        border: '1px solid',
                        width: '129px',
                        height: '54px',
                        '&:hover': {
                            backgroundColor: '#f4f4f4',
                            border: '1px solid #2035c3',
                        },
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Sign Up
                </Button>
            </Stack>
            <BottomText />
        </EmailTextBoxFrameComponent>
    );
};

export default EmailTextBox;
