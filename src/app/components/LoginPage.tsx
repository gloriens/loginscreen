'use client'
import React from 'react'
import {styled, Box, Grid, Typography, Stack, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";
import ImageDisplayer from "@/app/components/ImageDisplayer";
import LoginButton from "@/app/components/LoginButton";
import EmailBox from "@/app/components/LoginForm";

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

function LoginPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Yatayda ortalama
                alignItems: 'center', // Dikeyde ortalama
                height: '92vh',
                width: '80vw',
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={0} style={{ height: '100%' }}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        backgroundColor: '#FFFFFF',
                        height: '100%',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'space-between',
                        display: 'flex',
                    }}
                ><LoginPageFrame>
                    <Stack
                        direction='column'
                        alignItems='flex-start'
                        justifyContent='space-around'
                        paddingLeft='60px'
                        marginRight='10px'
                    >
                        <Typography fontWeight='bold' fontSize='30px' sx={{ color: '#0C31F1' }}>
                            Digital
                        </Typography>
                        <Typography fontWeight='bold' fontSize='36px' paddingTop='80px' sx={{ color: '#0C31F1' }}>
                            Artificial Intelligence Driving Results For The Travel Industry
                        </Typography>
                        <Typography paddingTop='25px' sx={{ color: '#00000099' }}>
                            Welcome back! Please login to your account.
                        </Typography>
                        <Typography paddingTop='35px' fontSize='12px' sx={{ color: '#8843da' }}>
                            Email Section
                        </Typography>


                        <EmailBox MailLabel={'E-mail'} passLabel={'Password'}></EmailBox>





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

                    </Stack>
                    </LoginPageFrame>


                    {/* ***************************************** BİSİKLET KISMI ************************************************ */}

                </Grid>

                <Grid item xs={6} sx={{ backgroundColor: '#f4f4f4', height: '100%', width: '100%'}}>
                    <Stack>

                    </Stack>
                    <Typography sx={{
                        color: 'black',
                        top: '200px'

                    }}>
                        Burası bisiklet
                    </Typography>

                    <ImageDisplayer imageUrl={"bisiklet.png"}>

                    </ImageDisplayer>
                </Grid>
            </Grid>
        </Box>
    );
}



export default LoginPage;
