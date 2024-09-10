import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PokemonsContainer } from "./components/PokemonsContainer";

export default function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}
