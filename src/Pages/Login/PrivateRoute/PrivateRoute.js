import { LinearProgress, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


export default function PrivateRoute({ children, ...rest }) {
  const {user, isLoading} = useAuth();
  if(isLoading) {
    return (
      <Box sx={{ minHeight: "100vh",background: '#561c22', display: "flex", alignItems: "center" }}>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
        </Box>
    )
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}