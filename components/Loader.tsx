import React from "react";

// mui
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <CircularProgress />
      <Typography variant="h5">Please wait a little longer</Typography>
    </Box>
  );
};

export default Loader;
