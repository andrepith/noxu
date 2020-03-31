import axios from "axios";

export const omdbService = async ({ search }) => {
  const { REACT_APP_API_BASE_URL, REACT_APP_API_KEY: apikey } = process.env;
  const params = {
    apikey,
    ...search
  };
  const response = await axios.get(REACT_APP_API_BASE_URL, {
    params
  });

  return response;
};
