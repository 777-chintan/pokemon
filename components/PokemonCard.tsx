import React from "react";

// mui
import { Grid, Box, Chip, Typography, Button } from "@mui/material";

// utils
import { POKEMON } from "@/apis/pokemon";

const PokemonCard = ({ pokemon }: { pokemon: POKEMON }) => {
  return (
    <Grid item xs={12} md={4} lg={3} key={pokemon?.id} sx={{ p: 2 }}>
      <Box
        sx={{
          border: "1px solid",
          borderRadius: 1,
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={pokemon?.image}
          style={{
            height: "10rem",
            padding: 2,
            objectFit: "contain",
          }}
          alt={pokemon?.name}
        />
        <Grid container spacing={2} sx={{ pl: 2 }}>
          <Grid item xs={12}>
            <Chip label={`#${pokemon?.number}`} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={"h6"}> {pokemon?.name}</Typography>
          </Grid>
          <Grid item container xs={12} sx={{ mb: 1, mr: 1 }} spacing={1}>
            {pokemon?.types?.map((t, index) => (
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant={"contained"}
                  size="small"
                  sx={{
                    bgcolor: `rgba(${Math.random() * 255}, ${
                      Math.random() * 255
                    }, ${Math.random() * 255}, 1)`,
                  }}
                >
                  {t}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PokemonCard;
