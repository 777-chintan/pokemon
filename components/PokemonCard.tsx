import React from "react";

// mui
import { Grid, Box } from "@mui/material";

// utils
import { POKEMON } from "@/apis/pokemon";

const PokemonCard = ({ pokemon }: { pokemon: POKEMON }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={3}
      key={pokemon?.id}
      sx={{ height: "25rem", p: 4 }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderRadius: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={pokemon.image}
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            objectFit: "contain",
          }}
          alt={pokemon.name}
        />
        <Box></Box>
      </Box>
    </Grid>
  );
};

export default PokemonCard;
