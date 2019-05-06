import React from "react";

// Utils
import { useFetchCharacters, useFetchCharactersById } from "../utils/useFetch";

// Components
import Layout from "../components/Layout";
import Header from "../components/Header";
import Comics from "../components/Comics";
import Character from "../components/Character";

function Detail(props) {
  const [term, termIsError, termIsLoading] = useFetchCharacters({ term: props.location.state.name });
  const [id, idIsError, idIsLoading] = useFetchCharactersById({ id: props.location.state.id });

  return (
    <Layout>
      <Header />
      <Character
        term={term}
        isError={termIsError}
        isLoading={termIsLoading}
      />
      <Comics
        id={id}
        isError={idIsError}
        isLoading={idIsLoading}
      />
    </Layout>
  );
}

export default Detail;
