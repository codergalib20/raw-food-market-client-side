import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Feature from "./Feature";

export default function Features() {
  const [features, setFeatures] = React.useState([]);
  React.useEffect(() => {
    fetch("/feature.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box sx={{ py: "20px" }}>
      <Container>
        <Grid container spacing={3}>
          {features.map((feature) => (
            <Feature key={feature._id} feature={feature} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
