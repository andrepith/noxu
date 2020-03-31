import { combineReducers } from "redux";
import { movieList, movieDetail } from "./omdbReducers";

export default combineReducers({ movieList, movieDetail });
