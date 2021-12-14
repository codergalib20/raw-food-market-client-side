import { Container, Typography } from "@mui/material";
import React from "react";
import rawLogo from "../../Images/raw-logo.png";

export default function RawLogo() {
  return (
    <Container  align="center" sx={{ py: "35px" }}>
      <img src={rawLogo} alt="" />
      <Typography variant="h6" color="#fe6b8b">
        {" "}
        Your whole food, plant-based life.
      </Typography>
    </Container>
  );
}
