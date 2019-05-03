import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Grid({ character, comics, isLoading, isError }) {
  return (
    <React.Fragment>
      {isError && (
        <Comics>
          <p>Something went wrong...</p>
        </Comics>
      )}

      {character &&
        character.data.results.map(item => (
          <Main key={item.id}>
            <Image>
              <Link
                to={{
                  pathname: "/detail",
                  state: { id: item.id }
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
                    state: { id: item.id }
                  }}
                >
                  {item.name}
                </Link>
              </h1>
              <p>{item.description}</p>
              <span>
                {new Date(item.modified).getFullYear() + "-" + (new Date(item.modified).getMonth() + 1) + "-" + new Date(item.modified).getDate() + " " + new Date(item.modified).getHours() + ":" + new Date(item.modified).getMinutes() + ":" + new Date(item.modified).getSeconds()}
              </span>
            </Description>
          </Main>
        ))}

      {isLoading && (
        <Comics>
          <p>Loading comics...</p>
        </Comics>
      )}

      {comics && (
        <Comics>
          <h1>Comics</h1>
          <ul>
            {comics.data.results.map(item => (
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
                        {new Date(item.date).getFullYear() + "-" + (new Date(item.date).getMonth() + 1) + "-" + new Date(item.date).getDate() + " " + new Date(item.date).getHours() + ":" + new Date(item.date).getMinutes() + ":" + new Date(item.date).getSeconds()}
                      </React.Fragment>
                    ))}
                </span>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </Comics>
      )}
    </React.Fragment>
  );
}

Grid.propTypes = {
  character: PropTypes.object,
  comics: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool.isRequired,
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

const Comics = styled.div`
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
