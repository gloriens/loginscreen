'use client'
import React from 'react'
import {styled, Box, Grid, Typography, Stack, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";

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
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        display: 'flex',
                        paddingLeft: '110px',
                        paddingTop: '70px',
                    }}
                ><LoginPageFrame>
                    <Stack
                        direction='column'
                        spacing={0}
                        alignItems='flex-start'
                        justifyContent='flex-start'
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
                        <TextField
                            label='Email'
                            variant='outlined'
                            type='email'
                            fullWidth
                            sx={{ marginBottom: '0' }} // Alt boşluk
                        />
                        <TextField
                            label='Password'
                            variant='outlined'
                            type='password'
                            fullWidth
                            sx={{ marginBottom: '16px' }} // Alt boşluk
                        />
                        <Stack
                            direction='row'
                            spacing='300px'
                            alignItems='flex-start'
                            justifyContent='flex-start'
                        >
                            <FormControlLabel control={
                                <Checkbox/>
                            } label={"Remember Me"}>
                                
                            </FormControlLabel>
                            <Typography paddingTop='9px' sx={{ color: '#00000099' }}>
                                Forgot Password?
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing='40px'
                            alignItems='flex-start'
                            justifyContent='flex-start'
                            paddingTop='40px'
                        >
                            <Button
                                variant="contained"
                                sx={{ borderRadius: '0px',
                                    backgroundColor: '#3751FE',
                                    width: '129px',
                                    height: '54px',
                                    '&:hover': {
                                        backgroundColor: '#2a389c', // Hover durumunda arka plan rengi
                                        border: '1px solid #2035c3', // Hover durumunda kenar rengi
                                    },
                                    transition: 'background-color 0.3s ease', // Renk geçiş efekti
                                }} // Kenarları 12px yuvarlatır
                            >
                                Login
                            </Button>

                            <Button
                                variant="contained"
                                sx={{ borderRadius: '0px',
                                    backgroundColor: '#ffffff',
                                    color: '#3751FE',
                                    borderColor: '#3751FE',
                                    border: '1px solid',
                                    width: '129px',
                                    height: '54px',
                                    '&:hover': {
                                        backgroundColor: '#f4f4f4', // Hover durumunda arka plan rengi
                                        border: '1px solid #2035c3', // Hover durumunda kenar rengi
                                    },
                                    transition: 'background-color 0.3s ease', // Renk geçiş efekti
                                }} // Kenarları 12px yuvarlatır
                            >
                                Sign Up
                            </Button>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing='60px'
                            alignItems='flex-start'
                            justifyContent='flex-start'
                            paddingTop='70px'
                        >
                            <Typography fontSize='18px' sx={{ color: '#00000099' }}>
                                Or Login With
                            </Typography>
                            <Typography fontWeight='bold' fontSize='18px' sx={{ color: '#3751FE' }}>
                                Facebook
                            </Typography>
                            <Typography fontWeight='bold' fontSize='18px' sx={{ color: '#3751FE' }}>
                                Linkedln
                            </Typography>
                            <Typography fontWeight='bold' fontSize='18px' sx={{ color: '#3751FE' }}>
                                Google
                            </Typography>


                        </Stack>

                    </Stack>
                    </LoginPageFrame>
                </Grid>

                <Grid item xs={6} sx={{ backgroundColor: '#f4f4f4', height: '100%', width: '100%'}}>
                    <Typography sx={{
                        color: 'black',
                        top: '200px'

                    }}>
                        Burası bisiklet
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}



export default LoginPage;
