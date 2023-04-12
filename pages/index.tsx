import Head from "next/head";
import { useQuery } from "@apollo/client";

//react
import { useState } from "react";

// mui
import { Container, Grid } from "@mui/material";

// utils
import { getPokemonsByPagination, POKEMON } from "@/apis/pokemon";

// components
import Loader from "@/components/Loader";
import PokemonCard from "@/components/PokemonCard";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const {
    loading,
    data,
  }: {
    loading: boolean;
    data: { pokemons: POKEMON[]; first: number };
  } = useQuery(getPokemonsByPagination, {
    variables: { first: 20 },
  });

  console.log("first", data);
  return (
    <>
      <Head
        children={
          <>
            <title>Pokemon</title>
          </>
        }
      ></Head>
      <Container maxWidth="lg">
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <Grid container>
            {data?.pokemons?.map((pokemon: POKEMON, index) => (
              <PokemonCard pokemon={pokemon} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
