import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Utils
import { formatDate } from "../utils/helpers";

function Grid({ term, isLoading, isError }) {
  return (
    <React.Fragment>
      {isError && (
        <Message>
          <p>Something went wrong...</p>
        </Message>
      )}

      {isLoading ? (
        <Message>
          <p>Loading character...</p>
        </Message>
      ) : (
        term &&
        term.data.results.map(item => (
          <Main key={item.id}>
            <Image>
              <Link
                to={{
                  pathname: "/detail",
                  state: { name: item.name, id: item.id }
                }}
              >
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
              </Link>
            </Image>
            <Description>
              <h1>
                <Link
                  to={{
                    pathname: "/detail",
                    state: { name: item.name, id: item.id }
                  }}
                >
                  {item.name}
                </Link>
              </h1>
              <p>{item.description}</p>
              <span>{formatDate(item.modified)}</span>
            </Description>
          </Main>
        ))
      )}
    </React.Fragment>
  );
}

Grid.propTypes = {
  term: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool.isRequired
};

const Main = styled.div`
  display: flex;
  background-color: #fff;
  border: 0.25rem #000 solid;
  box-shadow: 0.25rem 0.25rem 0 #000;
  padding: 2rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    line-height: normal;
    font-weight: 700;
    padding-bottom: 1.25rem;

    & > a {
      color: #000;
    }
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 0.25rem #000 solid;
  box-shadow: 0.25rem 0.25rem 0 #000;
  padding: 2rem 2rem 1rem;
  margin-bottom: 1.5rem;
`;

const Image = styled.div`
  width: 40%;

  & > a > img {
    max-width: 100%;
  }
`;

const Description = styled.div`
  width: 60%;
  padding: 0 2rem;

  & > span {
    color: #777;
    padding-bottom: 0;
  }
`;

export default Grid;
