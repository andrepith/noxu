import React from "react";
import { connect } from "react-redux";

import SearchByTitle from "components/searchByTitle";
import Card from "components/card";

const HomePage = ({ movieList }) => {
  const isMovieList = Object.keys(movieList).length;

  try {
    return (
      <div>
        <SearchByTitle />
        {isMovieList ? (
          movieList.data.Response !== "False" ? (
            <Card />
          ) : (
            <div>{movieList.data.Error}</div>
          )
        ) : (
          <div></div>
        )}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }
};

const mapStateToProps = ({ movieList }) => ({ movieList });

export default connect(mapStateToProps, null)(HomePage);
