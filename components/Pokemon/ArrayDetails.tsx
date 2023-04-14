import React from "react";

// mui
import { Button, Grid, Typography } from "@mui/material";

const ArrayDetails = ({ title, value }: { title: string; value: string[] }) => {
  return (
    <Grid item xs={12} container sx={{ my: 1 }} gap={1}>
      <Grid item xs={12}>
        <Typography variant={"h6"}>{title}</Typography>
      </Grid>

      <Grid item xs={12} container>
        {value.map((v, index) => (
          <Grid xs={4} key={v + index} sx={{ pr: 1, pb: 1 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: `rgba(${Math.random() * 255}, ${
                  Math.random() * 255
                }, ${Math.random() * 255}, 1)`,
              }}
            >
              {v}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ArrayDetails;
