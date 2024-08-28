'use client'
import React, {useState} from 'react'
import { useContext } from 'react';
import {
    styled,
    Box,
    Grid,
    Typography,
    Stack,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Hidden
} from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";
import EmailBox from "@/app/components/LoginForm/LoginForm";
import TabDisplayer from "@/app/components/TabDisplyer";

const LoginPageFrame = styled(Box, {
    name: 'LoginPageFrameComponent',
    slot: 'Root'
})(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
}));

export const Context = React.createContext<{
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);


function LoginPage() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Context.Provider value={{ loggedIn, setLoggedIn }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '92vh',
                    width: '80vw',
                    backgroundColor: 'white',
                }}
            >
                {/* loggedIn true ise "Login Successful" mesajı gösterilecek */}

                {loggedIn ? (
                    <Typography variant="h4">Login Successful!</Typography>) : ( //{loggedIn(booleanın olduğu yer)
                                                                                 //Yapı şu şekilde => {loggedIn? ("true ise gösterilecek yer") : ("False ise gösterilecek yer)

                    <Grid container spacing={0} style={{ height: '100%' }}>
                        <Grid
                            item
                            xs={12} md={8} lg={6}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                height: '100%',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'space-between',
                                display: 'flex',
                            }}
                        >
                            <LoginPageFrame>
                                <Stack
                                    direction='column'
                                    alignItems='flex-start'
                                    justifyContent='space-around'
                                    paddingLeft='60px'
                                    marginRight='10px'
                                >
                                    <EmailBox MailLabel={'Username'} passLabel={'Password'} />
                                </Stack>
                            </LoginPageFrame>
                        </Grid>
                        <Hidden lgDown={true}>
                            <Grid item lg={6} sx={{ backgroundColor: '#f4f4f4', height: '100%', width: '100%', alignItems: 'center' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        height: '72%',
                                        marginTop: "100px",
                                        width: '100%'
                                    }}
                                >
                                    <TabDisplayer />
                                </Box>
                            </Grid>
                        </Hidden>
                    </Grid>
                )}
            </Box>
        </Context.Provider>
    );
}





export default LoginPage;
