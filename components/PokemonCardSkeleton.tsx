import React from "react";

// mui
import { Grid, Box, Skeleton } from "@mui/material";

const PokemonCardSkeleton = () => {
  return (
    <Grid item xs={12} md={4} lg={3} sx={{ p: 4 }}>
      <Box
        sx={{
          border: "1px solid",
          borderRadius: 1,
          display: "flex",
          height: "17rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid container>
          <Grid item xs={12} p={1}>
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "10rem" }}
            />
          </Grid>
          <Grid item xs={12} pl={1}>
            <Skeleton variant="rounded" width={75} height={25} />
          </Grid>
          <Grid item xs={12} p={1}>
            <Skeleton variant="rounded" sx={{ width: "100%" }} height={20} />
          </Grid>
          <Grid item container xs={12} px={1} spacing={1}>
            <Grid item xs={6} p={1}>
              <Skeleton variant="rounded" sx={{ width: "100%" }} height={20} />
            </Grid>
            <Grid item xs={6} p={1}>
              <Skeleton variant="rounded" sx={{ width: "100%" }} height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PokemonCardSkeleton;
