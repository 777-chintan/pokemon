import { useQuery } from "@apollo/client";
import React from "react";

// utils
import { POKEMON, getEvaluations } from "@/apis/pokemon";

// mui
import { Grid, Typography, Box } from "@mui/material";

// components
import Loader from "../Loader";

const Evalution = ({ pokemon }: { pokemon: POKEMON }) => {
  const {
    loading,
    data,
  }: {
    loading: boolean;
    data: { pokemon: POKEMON; name: string; id: string };
  } = useQuery(getEvaluations, {
    variables: { name: pokemon.name },
  });
  return (
    <Grid container spacing={2} sx={{ pt: 2 }}>
      <Grid item xs={12}>
        {loading && <Loader />}
      </Grid>

      {!!!data?.pokemon?.evolutions?.length && !loading && (
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
            }}
          >
            <Typography variant="h5">No Evalutions Found</Typography>
          </Box>
        </Grid>
      )}

      {data?.pokemon?.evolutions?.map((ev: POKEMON, index) => (
        <Grid
          key={ev.id + index}
          item
          xs={12}
          container
          sx={{
            bgcolor: "primary.light",
            color: "white",
            p: 2,
            my: 1,
            borderRadius: 2,
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h6">{ev.name}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {`FleeRate : ${ev.fleeRate}`}
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            {`Max CP : ${ev.maxCP}`}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {`Max HP : ${ev.maxHP}`}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Evalution;
