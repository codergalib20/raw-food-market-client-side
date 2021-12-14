import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  // const [top, setTop] = useState([]);
  // const filterItems = foods.filter(food => food.category === "top");
  // console.log(filterItems);
  // setTop(filterItems);
  // var a = {};
  // setTop(a);
  
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
    fetch('/foods.json')
    .then(res => res.json())
    .then(data => setFoods(data.filter(food => food.category === "top")))
    .catch(err => console.log(err));
  }, [foods]);
   console.log(foods);
  return (
    <>
      <Container sx={{ py: "70px" }}>
        <Typography className={sectionTitle} variant="h3">
          Top Foods
        </Typography>
      </Container>
      <Container>
          <Grid container spacing={3}>
            {/* {topFoods.map((topFood) => <Food topFood={topFood}/>)} */}
          </Grid>
      </Container>
    </>
  );
}
