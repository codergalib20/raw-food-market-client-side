import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import SigleProducts from "./SigleProducts";

export default function ManageProduct() {
  const [foods, setFoods] = useState([]);

  const useStyle = makeStyles({
    sectionTitle: {
      fontWeight: "600 !important",
      textTransform: "uppercase",
      color: "#333",
      textAlign: "center",
      transition: "all 0.4s ease-in-out",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
      "&:active": {
        color: "#880E4F",
      },
    },
  });
  const { sectionTitle } = useStyle();

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data.filter((food) => food.category === "top")))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container sx={{ py: "30px" }}>
        <Typography className={sectionTitle} variant="h3">
          Manage All Foods
        </Typography>
      </Container>
      <Container sx={{ py: "50px" }}>
          {foods.map((food) => (
            <SigleProducts key={food._id} food={food} foods={foods} setFoods={setFoods}/>
          ))}
      </Container>
    </>
  );
}

