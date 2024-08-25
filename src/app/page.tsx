import Image from "next/image";
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system";
import LoginPage from "@/app/components/LoginPage";

export default function Home() {
  return (
   <Container sx={{
       display: 'flex',
       justifyContent: 'center', // Yatayda ortalama
       alignItems: 'center', // Dikeyde ortalama
       height: '100vh',
       width: '100vw',
       backgroundColor: "#e5e5e5",
   }}>
           <LoginPage/>



   </Container>
  );
}
