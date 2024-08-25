'use client'
import React from 'react'
import {styled, Box, Grid, Typography, Stack, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";
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

function LoginPage() {
    return (
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



                        <EmailBox MailLabel={'E-mail'} passLabel={'Password'}></EmailBox>





                    </Stack>
                    </LoginPageFrame>


                    {/* ***************************************** BİSİKLET KISMI ************************************************ */}

                </Grid>

                <Grid item xs={6} sx={{ backgroundColor: '#f4f4f4', height: '100%', width: '100%',alignItems: 'center', }}>
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

            </Grid>
        </Box>
    );
}



export default LoginPage;
