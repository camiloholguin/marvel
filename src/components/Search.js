import React, { useState, useRef } from "react";
import styled from "styled-components";

// Utils
import { useFetchCharacters } from "../utils/useFetch";

// Components
import Character from "./Character";

function Form() {
  const [query, setQuery] = useState(window.localStorage.getItem("marvel") == null ? "" : window.localStorage.getItem("marvel"));
  const [term, isError, isLoading] = useFetchCharacters({ term: query });
  const inputSearch = useRef(null);

  if (query) {
    window.localStorage.setItem("marvel", query);
  }

  const onSubmit = e => {
    e.preventDefault();

    setQuery(inputSearch.current.value);
  };

  return (
    <React.Fragment>
      <Main>
        <Wrapper>
          <form onSubmit={e => onSubmit(e)}>
            <input
              ref={inputSearch}
              placeholder="Search"
              type="text"
            />
            <button>Enviar</button>
          </form>
        </Wrapper>
      </Main>
      <Character
        term={term}
        isError={isError}
        isLoading={isLoading}
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
