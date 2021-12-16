import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Food from "../../Shared/Food";
import Header from "../../Shared/Header";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  
  const useStyle = makeStyles({
    sectionTitle: {
      fontWeight: "600 !important",
      textTransform: "uppercase",
      color: "#333",
      textAlign: "center",
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        color: "#fe6b8b",
        cursor: "pointer",
      },
      "&:active": {
        color: "#880E4F",
      },
    },
  });
  const { sectionTitle } = useStyle();
 
  useEffect(() => {
    fetch('http://localhost:5000/foods')
    .then(res => res.json())
    .then(data => setFoods(data))
    .catch(err => console.log(err));
  }, []);
   console.log(foods);
  return (
    <>
    <Header/>
      <Container sx={{ py: "30px" }}>
        <Typography className={sectionTitle} variant="h3">
          All Foods
        </Typography>
      </Container>
      <Container sx={{pb:'50px'}}>
          <Grid container spacing={2}>
            {foods.map((food) => <Food key={food._id} food={food}/>)}
          </Grid>
      </Container>
    </>
  );
}
