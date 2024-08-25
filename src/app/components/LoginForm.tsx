import React, {useEffect, useState} from 'react';
import { styled } from "@mui/material/styles";
import {Button, Checkbox, FormControlLabel, Stack, TextField, Typography} from "@mui/material";
import theme from "@/app/themes/theme";

interface EmailTextBoxProps {
    MailLabel?: string;
    passLabel?: string;
}

const EmailTextBoxFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.EmailTextBoxFrameComponent?.styleOverrides?.root,
}));

const EmailTextBox: React.FC<EmailTextBoxProps> = ({ MailLabel,passLabel }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") //buradaki password ve email değerlerini usetate kullanarak kullanıcının yazdığı değere setledik
    /*useEffect(() => {
        console.log("email", email);
    }, [email]);*/

    const handleLogin = () => {
        if(email === "example@hotmail.com" && password === "password123"){
            alert("Login Successful!")
        }else {
            alert("⠀⠀⠀⠀⠀⠀⠀⢠⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢕⠄⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⡠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠂⠀\n" +
                "⠀⠀⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄\n" +
                "⠀⠀⠀⠀⢠⣣⠀⠀⠀⠀⠀⠀⠀⢀⡠⣖⣂⣀⡀⠀⠀⠀⠀⠀⠀⠀⠸⢧\n" +
                "⠀⢀⢾⠟⣯⡇⠀⠀⠀⠀⠀⠀⠀⠁⠈⣁⣀⠘⢷⣦⣄⡀⢀⢀⠀⣀⣀⣹\n" +
                "⠀⢸⢸⠀⠈⠃⠀⠀⠀⠀⠀⠀⣰⣾⡻⣭⣭⣽⣿⣾⡽⣿⡟⣼⣾⣿⣿⡟\n" +
                "⠀⠈⠹⣿⡏⠄⠀⠀⠀⠀⠀⠀⠁⠙⢜⠿⣿⣿⣿⣿⡧⠈⣸⣿⣿⣿⣿⡇\n" +
                "⠀⠀⣇⠘⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⠿⠛⠋⠀⠀⢻⣿⣿⣿⡿⠀\n" +
                "⠀⠀⠘⠤⠴⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠠⠂⠀⠀⢸⣿⣿⣿⡇⠀\n" +
                "⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⢿⡄⠀⠰⠄⠀⠀⠻⣿⣿⠇⠀\n" +
                "⠀⠀⠀⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠈⣇⣤⡤⢄⠀⣴⣶⣿⠟⠀⠀\n" +
                "⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⡔⠁⠀⡀⠀⠈⢹⣷⣿⣾⣿⣿⠏⠀⠀⠀\n" +
                "⠀⡠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⣠⣶⣦⣤⣤⣬⣿⣿⣿⣿⡟⠀⠀⠀⠀\n" +
                "⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⣍⣛⣿⣿⣿⣿⡟⠠⣀⠀⠀⠀\n" +
                "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⢙⣿⣿⣿⣿⣷⣤⡀⠉⡢⠀")
        }
    }

    return (
        <EmailTextBoxFrameComponent>
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                label={MailLabel}
                variant='outlined'
                type='email'
                fullWidth
                sx={{ marginBottom: '0' }} // Alt boşluk
            />
            <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}

                variant='outlined'
                label={passLabel}
                type='email'
                fullWidth
                sx={{ marginBottom: '0' }} // Alt boşluk
            />
            <Stack
                direction='row'
                alignItems='flex-start'
                justifyContent='space-between'
                display='flex'
                width='100%'
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
                alignItems='flex-start' // Butonları dikeyde ortalamak için 'center' kullanabilirsiniz
                justifyContent='space-around' // Aralıklara eşit boşluk verir
                paddingTop='40px'
                width='80%' // Genişliği tam yaparak aralıkların düzgün görünmesini sağlar
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
                            backgroundColor: '#2a389c', // Hover durumunda arka plan rengi
                            border: '1px solid #2035c3', // Hover durumunda kenar rengi
                        },
                        transition: 'background-color 0.3s ease', // Renk geçiş efekti
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
                            backgroundColor: '#f4f4f4', // Hover durumunda arka plan rengi
                            border: '1px solid #2035c3', // Hover durumunda kenar rengi
                        },
                        transition: 'background-color 0.3s ease', // Renk geçiş efekti
                    }}
                >
                    Sign Up
                </Button>
            </Stack>


        </EmailTextBoxFrameComponent>
    );
};

export default EmailTextBox;
