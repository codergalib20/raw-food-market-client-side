import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bannerImage from "../../Images/banner-image.jpg";

export default function Banner() {
  const useStyles = makeStyles({
    bannerStyle: {
      background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0, 0.8)) ,url(${bannerImage}) no-repeat center center`,
      backgroundSize: "cover",
    },
    bannerContainer: {
      minHeight: "600px",
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
    },
    bannerContent: {
      width: "100%",
      maxWidth: "750px",
      textAlign: "center",
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white !important",
      height: 48,
      marginTop: "15px !important",
      fontWeight: "bold",
      padding: '0 30px !important',
    },
  });
  const classes = useStyles();
  return (
    <Box className={classes.bannerStyle}>
      <Container className={classes.bannerContainer}>
        <Box className={classes.bannerContent}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "35px", pb: "10px", textTransform: 'capitalize' }}
            variant="h3"
            color="#fff"
            align="center"
          >
            Fresh and organic vegetables for your
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "17px" }}
            variant="h6"
            color="#ddd"
            align="center"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            repellat asperiores debitis maiores molestias autem laborum ex
            distinctio facilis nulla. Recusandae nemo architecto, sunt vel
            sapiente ad consequuntur asperiores adipisci.
          </Typography>
          <Box>
            <Button className={classes.button} >More Foods</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
