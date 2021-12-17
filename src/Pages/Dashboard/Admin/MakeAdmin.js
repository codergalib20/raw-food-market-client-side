import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import swal from "sweetalert";
import makeAdmin from "../../../Images/makeAdmin.png";

export default function MakeAdmin() {
  const useStyle = makeStyles({
    makeAdAdminPage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
    },
    makeAdminBox: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f5f5f5",
      boxShadow: "0px 0px 10px #FE6B8B",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0px 0px 20px #f7073b",
      },
    },
    makeAdminImageBox: {
      maxWidth: "200px",
      borderRadius: "50%",
      border: "5px solid #f5f5f5",
      boxShadow: "0px 0px 30px #00000029",
      transition: "all 0.5s ease-in-out !important",
      "&:hover": {
        borderColor: "#FE6B8B",
        cursor: "pointer",
        boxShadow: "0px 0px 30px #FE6B8B",
        background: "#FF8E53",
      },
    },
    makeAdminImage: {
      width: "100%",
    },
    titleText: {
      color: "#FF8E53 !important",
      padding: '10px 0',
      fontWeight: 'bold',
      width: "100% !important",
      textAlign: "center !important",
    },
    makeAdminEmailField: {
      width: "100% !important",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch",
      marginTop: "10px",
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      fontWeight: "bold",
      padding: "0 30px !important",
    },
  });
  const {
    makeAdAdminPage,
    makeAdminBox,
    titleText,
    makeAdminImage,
    makeAdminImageBox,
    makeAdminEmailInput,
    button,
    makeAdminEmailField,
  } = useStyle();


  const [email, setEmail] = useState("");
  const onBlurChange = (e) => {
    setEmail(e.target.value);
  };
  const submitNewAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          swal("Something wrong please try another id", "", "error");
        } else {
          swal("Success", "Admin Create", "success");
        }
      });
  };


  return (
    <Box className={makeAdAdminPage}>
      <Box className={makeAdminBox}>
        <Box className={makeAdminImageBox}>
          <img className={makeAdminImage} src={makeAdmin} alt="" />
        </Box>
        <Box>
          <Typography variant="h4" className={titleText}>Make Admin</Typography>
          <form onSubmit={submitNewAdmin}>
            <Box className={makeAdminEmailField}>
              <TextField
              onBlur={onBlurChange}
                label="Enter Email"
                variant="outlined"
                fullWidth
                className={makeAdminEmailInput}
                color="secondary"
              />
              <Button type="submit" className={button}>Submit</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
