import {
  Box,
  Button,
  LinearProgress,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

export default function Login({ setUserSetForm }) {
  const { loginUser, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const useStyle = makeStyles({
    loginForm: {
      backgroundColor: "#fff",
      padding: "80px 20px",
      borderRadius: "10px",
      textAlign: "center",
      color: "#fe6b8b",
    },
    inputField: {
      width: "100%",
      marginTop: "8px !important",
    },
    loginButton: {
      background: "#fe6b8b !important",
      color: "#fff !important",
      fontWeight: "700 !important",
      padding: "8px 20px!important",
    },
  });
  const [userData, setUserData] = useState({});
  const onChangeInputField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = { ...userData };
    newUserData[field] = value;
    setUserData(newUserData);
  };
  console.log(userData);
  const { loginForm, inputField, loginButton } = useStyle();

  const submitLoginForm = (e) => {
    e.preventDefault();
    loginUser(userData?.email, userData?.password, history, location);
  };
  return (
    <>
      {!isLoading && (
        <form className={loginForm} onSubmit={submitLoginForm}>
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{ textTransform: "uppercase" }}
          >
            Login
          </Typography>
          <Box sx={{ pt: "10px" }}>
            <TextField
              onChange={onChangeInputField}
              className={inputField}
              id="outlined-textarea"
              label="E-mail"
              placeholder="E-mail"
              type="email"
              name="email"
              multiline
              required
            />
            <TextField
              onChange={onChangeInputField}
              className={inputField}
              id="outlined-textarea"
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              multiline
              required
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: "20px",
              }}
            >
              <Button type="submit" className={loginButton}>
                Login
              </Button>
              <Button
                onClick={() => setUserSetForm("register")}
                className={loginButton}
              >
                Are you new user?
              </Button>
            </Box>
          </Box>
        </form>
      )}
      {isLoading && (
        <Box sx={{ minHeight: "90vh", display: "flex", alignItems: "center" }}>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
        </Box>
      )}
    </>
  );
}
