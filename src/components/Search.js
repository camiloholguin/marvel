import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Grid from "./Grid";

const key = "45ea1f18eed84810423471fc719c6a50";

function Form() {
  const [storage, setStorage] = useState(localStorage.getItem("marvel") || "");
  const [query, setQuery] = useState(storage || "");
  const [search, setSearch] = useState();
  const [character, setCharacter] = useState();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsError(false);

      if (query) {
        try {
          const result = await axios(
            `https://gateway.marvel.com:443/v1/public/characters?name=${query}&apikey=${key}`
          );

          setCharacter(result.data);
        } catch (error) {
          setIsError(true);
        }
      }
    };

    setStorage(localStorage.setItem("marvel", query));

    fetch();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();

    setQuery(search);
  };

  return (
    <React.Fragment>
      <Main>
        <Wrapper>
          <form onSubmit={e => onSubmit(e)}>
            <input
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              type="text"
            />
            <button>Enviar</button>
          </form>
        </Wrapper>
      </Main>
      <Grid
        character={character}
        isError={isError}
      />
    </React.Fragment>
  );
}

const Main = styled.div`
  height: 100%;
  display: flex;
  padding: 1rem 0 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  & > form {
    display: flex;

    & > input,
    & > button {
      font-family: "Comic Sans MS", cursive, sans-serif;
      font-size: 1.25rem;
      border: 0.25rem #000 solid;
      box-shadow: 0.25rem 0.25rem 0 #000;
    }

    & > input {
      width: 80%;
      height: 44px;
      background: #f9fa00;
      padding: 0 1rem;
    }

    & > button {
      width: 15%;
      cursor: pointer;
      background: #fff;
      padding: 0.5rem;
      margin-left: 3%;
    }
  }
`;

export default Form;
