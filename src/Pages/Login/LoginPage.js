import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import loginBannerImage from "../../Images/register.svg";
import Header from '../../Shared/Header';
import Login from './Form/Login';
import Register from "./Form/Register";

export default function LoginPage() {
  const [userSetForm, setUserSetForm] = React.useState('login');
  const useStyle = makeStyles({
    loginFormImage: {
      maxWidth: "100%  !important",
    },
    loginRegisterPage: {
      backgroundColor: "#561c22",
      marginTop: "22px",
    },
  });
  const { loginFormImage, loginRegisterPage } = useStyle();
  return (
    <>
    <Header/>
    <Box className={loginRegisterPage}>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ minHeight: '90vh', alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <Box>
               {
                 userSetForm === 'login' ? <Login setUserSetForm={setUserSetForm} /> : <Register setUserSetForm={setUserSetForm} />
               }
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className={loginFormImage} src={loginBannerImage} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{marginTop: '-70px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fe6b8b"
            fill-opacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,154.7C840,128,960,128,1080,106.7C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Box></>
  );
}
