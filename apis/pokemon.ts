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
  evolutions: POKEMON[];
}

export const getPokemonsByPagination = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`;
// weight {
//   minimum
//   maximum
// }
// height {
//   minimum
//   maximum
// }
// classification
// resistant
// weaknesses
// fleeRate
// maxCP
// maxHP

export const getPokemonByIdorName = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
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

export const getEvaluations = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        fleeRate
        maxCP
        maxHP
      }
    }
  }
`;
