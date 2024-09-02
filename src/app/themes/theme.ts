'use client'
import { createTheme } from "@mui/material/styles";
import { Roboto } from 'next/font/google';
import { green, purple, blue, } from '@mui/material/colors';


declare module '@mui/material/styles' {
    interface Components {
        LoginPageFrameComponent?: {
            styleOverrides?: {
                root?: React.CSSProperties;
            };
        };
        ImageDisplayerFrameComponent?: {
            styleOverrides?: {
                root?: React.CSSProperties;
            };
        };
        TabDisplayerFrameComponent?: {
            styleOverrides?: {
                root?: React.CSSProperties;
            }
        };
        LoginButtonFrameComponent?: {
            styleOverrides?: {
                root?: React.CSSProperties;
            }
        };
        EmailTextBoxFrameComponent?:{
            styleOverrides?: {
                root?: React.CSSProperties;

            }
        };
        PinkyPromiseFrameComponent?:{
            styleOverrides?: {
                root?: React.CSSProperties;
            }
        }
    }
}

const roboto = Roboto({
    weight: ['400', '700'], // Font ağırlıklarını ayarlayabilirsiniz
    subsets: ['latin'], // Desteklenen dil alt kümelerini belirtebilirsiniz
});

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily, // Roboto fontunu kullanacak
    },
    components: {
        LoginPageFrameComponent: {
            styleOverrides: {
                root: {

                }
            }

        },
        ImageDisplayerFrameComponent:{
            styleOverrides: {
                root: {

                }
            }
        },
        TabDisplayerFrameComponent: {
            styleOverrides: {
                root: {

                }
            }
        },
        LoginButtonFrameComponent: {
            styleOverrides: {
                root: {
                }
            }
        },
        EmailTextBoxFrameComponent:{
            styleOverrides: {
                root: {
                }
            }
        },
        PinkyPromiseFrameComponent:{
            styleOverrides: {
                root: {

                }
            }
        }
    }
});

export default theme;
