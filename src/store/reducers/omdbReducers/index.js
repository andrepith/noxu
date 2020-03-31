import { GET_MOVIE_LIST_BY_TITLE, GET_MOVIE_DETAIL } from "store/types";

export const movieList = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST_BY_TITLE:
      return payload;
    default:
      return state;
  }
};

export const movieDetail = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_DETAIL:
      return payload;
    default:
      return state;
  }
};
