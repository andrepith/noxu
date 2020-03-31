import { FAVORITES } from "store/types";

export const favoriteAction = payload => dispatch => {
  dispatch({
    type: FAVORITES,
    payload
  });
};
