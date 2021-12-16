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
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

export default function Register({ setUserSetForm }) {
  const { registerNewUser, isLoading } = useAuth();
  const history = useHistory();
  const useStyle = makeStyles({
    registerForm: {
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
    registerButton: {
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
  const submitRegisterForm = (e) => {
    e.preventDefault();
    if (userData?.password !== userData?.password2) {
      swal("Something Wrong", "Password Did't match", "error");
      return;
    }
    registerNewUser(
      userData?.email,
      userData?.password,
      userData.firstName + " " + userData.lastName,
      history
    );
  };
  const { registerForm, inputField, registerButton } = useStyle();
  return (
    <>
      {!isLoading && (
        <form className={registerForm} onSubmit={submitRegisterForm}>
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{ textTransform: "uppercase" }}
          >
            Register
          </Typography>
          <Box sx={{ pt: "10px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                sx={{ width: "49%" }}
                onChange={onChangeInputField}
                id="outlined-textarea"
                label="First Name"
                placeholder="First Name"
                type="text"
                name="firstName"
                multiline
                required
              />
              <TextField
                sx={{ width: "49%" }}
                onChange={onChangeInputField}
                id="outlined-textarea"
                label="Last Name"
                placeholder="Last Name"
                type="text"
                name="lastName"
                multiline
                required
              />
            </Box>
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
            <TextField
              onChange={onChangeInputField}
              className={inputField}
              id="outlined-textarea"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="password2"
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
              <Button type="submit" className={registerButton}>
                Register
              </Button>
              <Button
                onClick={() => setUserSetForm("login")}
                className={registerButton}
              >
                Already register?
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
