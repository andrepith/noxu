import { combineReducers } from "redux";
import { movieList, movieDetail } from "./omdbReducers";
import { favorites } from "./favoritesReducers";

export default combineReducers({ movieList, movieDetail, favorites });
