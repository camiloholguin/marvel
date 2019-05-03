import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Main>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
          alt="Marvel"
        />
      </Link>
    </Main>
  );
}

const Main = styled.div`
  text-align: center;
  padding: 5rem 0 1rem;

  & > a {
    & > img {
      max-width: 30%;
    }
  }
`;

export default Header;
