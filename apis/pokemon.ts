import { gql } from "@apollo/client";

export interface POKEMON {
  __typename: string;
  id: string;
  number: string;
  name: string;
  weight: {
    __typename: string;
    minimum: string;
    maximum: string;
  };
  height: {
    __typename: string;
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

export const getPokemonsByPagination = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;
