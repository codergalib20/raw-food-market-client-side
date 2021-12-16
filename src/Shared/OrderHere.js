import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodInfo from "./FoodInfo";
import Header from './Header';
import ShowImage from "./ShowImage";

export default function OrderHere() {
  const useStyle = makeStyles({
    cartImgButtonPaper: {
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      boxSizing: "border-box",
      overflow: "hidden",
      transition: "all 0.5s ease-in-out !important",
      "&:active": {
        background: "#fe6b8b !important",
      },
    },
    cartImgButtonImg: {
      width: "100%",
      height: "auto",
      transform: "scale(1)",
      transition: "transform 0.5s",
      "&:hover": {
        transform: "scale(1.4)",
      },
      "&:active": {
        transform: "scale(0.8)",
      },
    },
    showImageNumber: {
      position: "absolute",
      top: "5px",
      left: "5px",
      background: '#fe6b8b',
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      
      
    }
  });
  const { cartImgButtonPaper, cartImgButtonImg, showImageNumber } = useStyle();

  const [food, setFood] = useState({});
  const [showImg, setShowImg] = useState({ShowImg : food.image, number : 1});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/foods/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
     <>
     <Header/>
     <Container sx={{ py: "30px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxHeight: "400px", width: "100%", overflow: "hidden", position: 'relative' }}>
            <Typography className={showImageNumber} variant="h4">{showImg.number}</Typography>
            <ShowImage showImg={showImg.showImg ? showImg.showImg : food?.image} />
          </Box>
          <Box sx={{ display: "flex", mt: "5px" }}>
            <Paper
              className={cartImgButtonPaper}
              onClick={() => setShowImg({showImg : food?.image, number : 1})}
              elevation={3}
            >
              <img
                className={cartImgButtonImg}
                src={food.image}
                alt={food.name}
              />
            </Paper>
            <Paper
              className={cartImgButtonPaper}
              sx={{ ml: "10px" }}
              onClick={() => setShowImg({showImg : food?.image2, number : 2})}
              elevation={3}
            >
              <img
                className={cartImgButtonImg}
                src={food.image2}
                alt={food.name}
              />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
           <FoodInfo food={food}/>
        </Grid>
      </Grid>
    </Container>
     </>
  );
}
