import React from "react";

// mui
import { Grid, Typography } from "@mui/material";

const Detail = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <Grid item xs={12} md={6} container gap={1}>
      <Grid item xs={12}>
        <Typography variant={"body1"} sx={{ color: "white" }}>
          {title}
        </Typography>
        <Typography variant={"h6"}>{value}</Typography>
      </Grid>
    </Grid>
  );
};

export default Detail;
