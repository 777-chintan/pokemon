import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "@apollo/client";

//react
import { useEffect, useState } from "react";

// mui
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// utils
import { POKEMON, getPokemonByIdorName } from "@/apis/pokemon";

// components
import Loader from "@/components/Loader";
import Detail from "@/components/Pokemon/Detail";
import ArrayDetails from "@/components/Pokemon/ArrayDetails";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<POKEMON | null>(null);
  const [isEvalutionVisible, setIsEvalutionVisible] = useState<boolean>(false);
  const {
    data,
  }: {
    data: { pokemon: POKEMON; name: string; id: string };
  } = useQuery(getPokemonByIdorName, {
    variables: { name: router?.query?.pokemon },
  });

  useEffect(() => {
    if (data?.pokemon) {
      setPokemon(data?.pokemon);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <Head
        children={
          <>
            <title>{router?.query?.pokemon}</title>
          </>
        }
      ></Head>

      <Container maxWidth="lg">
        <Button variant="contained" onClick={() => router.back()}>
          <ArrowBackIosIcon /> Go Back
        </Button>
        {loading && <Loader />}
        {pokemon && (
          <Grid container spacing={1}>
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Typography variant="h6" fontSize={30}>
                {pokemon?.name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Typography
                sx={{ color: "lightgray" }}
                fontSize={30}
              >{`#${pokemon?.number}`}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ border: "1px solid", borderRadius: 1 }}>
                <img
                  src={pokemon?.image}
                  style={{
                    height: "25rem",
                    width: "100%",
                    padding: 2,
                    objectFit: "contain",
                  }}
                  alt={pokemon?.name}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} container>
              <Grid
                item
                xs={12}
                container
                sx={{ bgcolor: "primary.light", borderRadius: 2, p: 2 }}
                // spacing={2}
              >
                <Detail title={"Weight"} value={pokemon?.weight?.minimum} />
                <Detail title={"Height"} value={pokemon?.height?.minimum} />
                <Detail
                  title={"Classification"}
                  value={pokemon?.classification}
                />
                <Detail title={"FleeRate"} value={pokemon?.fleeRate} />
                <Detail title={"Max CP"} value={pokemon?.maxCP} />
                <Detail title={"Max HP"} value={pokemon?.maxHP} />
              </Grid>
              <Grid item xs={12}>
                <ArrayDetails title={"Types"} value={pokemon?.types || []} />
              </Grid>

              <Grid item xs={12}>
                <ArrayDetails
                  title={"Resistant"}
                  value={pokemon?.resistant || []}
                />
              </Grid>

              <Grid item xs={12}>
                <ArrayDetails
                  title={"Weaknesses"}
                  value={pokemon?.weaknesses || []}
                />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
}
