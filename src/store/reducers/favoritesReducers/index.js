import { FAVORITES } from "store/types";

export const favorites = (state = [], { type, payload }) => {
  switch (type) {
    case FAVORITES:
      return payload;
    default:
      return state;
  }
};
