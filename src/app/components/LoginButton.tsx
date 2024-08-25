import React from 'react';
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import theme from "@/app/themes/theme";

interface ILoginButtonProps {
    text?: string;
}

const LoginButtonFrameComponent = styled('div')(({ theme }) => ({
    ...theme.components?.LoginButtonFrameComponent?.styleOverrides?.root,
}));

const LoginButton: React.FC<ILoginButtonProps> = ({ text }) => {
    return (
        <LoginButtonFrameComponent>

        </LoginButtonFrameComponent>
    );
};

export default LoginButton;
