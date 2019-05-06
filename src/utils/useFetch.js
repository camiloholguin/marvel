import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const key = "45ea1f18eed84810423471fc719c6a50";

export const useFetchCharacters = ({ term }) => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    if (term) {
      const fetch = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
          const result = await axios(
            `https://gateway.marvel.com:443/v1/public/characters?name=${term}&apikey=${key}`
          );

          setData(result.data);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
        }
      };

      fetch();
    }
  }, [term]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, isError, isLoading];
};

export const useFetchCharactersById = ({ id }) => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    if (id) {
      const fetch = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
          const result = await axios(
            `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=-focDate&apikey=${key}`
          );

          setData(result.data);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
        }
      };

      fetch();
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, isError, isLoading];
};
