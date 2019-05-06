import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Utils
import { formatDate } from "../utils/helpers";

function Comics({ id, isLoading, isError }) {
  return (
    <React.Fragment>
      {isError && (
        <Message>
          <p>Something went wrong...</p>
        </Message>
      )}

      {isLoading ? (
        <Message>
          <p>Loading comics...</p>
        </Message>
      ) : (
        id && (
          <Main>
            <h1>Comics</h1>
            <ul>
              {id.data.results.map(item => (
                <li key={item.id}>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt={item.name}
                  />
                  <span>
                    {item.dates
                      .filter(date => date.type === "onsaleDate")
                      .map(item => (
                        <React.Fragment key={item.date}>
                          {formatDate(item.date)}
                        </React.Fragment>
                      ))}
                  </span>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </Main>
        )
      )}
    </React.Fragment>
  );
}

Comics.propTypes = {
  id: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool.isRequired
};

const Message = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 0.25rem #000 solid;
  box-shadow: 0.25rem 0.25rem 0 #000;
  padding: 2rem 2rem 1rem;
  margin-bottom: 1.5rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 0.25rem #000 solid;
  box-shadow: 0.25rem 0.25rem 0 #000;
  padding: 2rem 2rem 1rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    line-height: normal;
    font-weight: 700;
    padding-bottom: 1.25rem;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
  }

  ul > li {
    width: calc(33.333% - 2rem);
    padding: 0.5rem 1rem;

    & > img {
      max-width: 100%;
    }

    & > span {
      color: #777;
      padding-top: 0.5rem;
      padding-bottom: 0;
    }
  }
`;

export default Comics;
