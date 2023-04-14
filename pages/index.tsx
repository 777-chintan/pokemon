import Head from "next/head";
import { useQuery } from "@apollo/client";

//react
import { useEffect, useState } from "react";

// mui
import { Container, Grid, Button } from "@mui/material";

// utils
import { getPokemonsByPagination, POKEMON } from "@/apis/pokemon";

// components
import PokemonCard from "@/components/PokemonCard";
import PokemonCardSkeleton from "@/components/PokemonCardSkeleton";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [pokemons, setPokemons] = useState<POKEMON[]>([]);
  const {
    loading,
    data,
  }: {
    loading: boolean;
    data: { pokemons: POKEMON[]; first: number };
  } = useQuery(getPokemonsByPagination, {
    variables: { first: page * 20 },
  });

  useEffect(() => {
    if (
      !loading &&
      data?.pokemons &&
      data?.pokemons?.length !== pokemons.length
    ) {
      setPokemons(data.pokemons);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {pokemons?.map((pokemon: POKEMON, index) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id + index} />
          ))}

          {loading && <PokemonCardSkeleton />}
          {loading && <PokemonCardSkeleton />}
          {loading && <PokemonCardSkeleton />}
          {loading && <PokemonCardSkeleton />}
        </Grid>

        {!loading && (
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Button
              variant={"contained"}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              Load More
            </Button>
          </Grid>
        )}
      </Container>
    </>
  );
}
