import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Grid from "../components/Grid";

const key = "45ea1f18eed84810423471fc719c6a50";

function Detail(props) {
  const [characterId] = useState(props.location.state.id);
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsError(false);

      try {
        const result = await axios(
          `https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${key}`
        );

        setCharacter(result.data);
      } catch (error) {
        setIsError(true);
      }

      try {
        setIsLoading(true);

        const result = await axios(
          `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?orderBy=-focDate&apikey=${key}`
        );

        setComics(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetch();
  }, [characterId]);

  return (
    <Layout>
      <Header />
      <Grid
        character={character}
        comics={comics}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default Detail;
