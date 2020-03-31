import React from "react";
import { connect } from "react-redux";

import Card from "components/card";

const SearchResult = ({ movieList }) => {
  return <Card searchData={movieList.data.Search} />;
};

const mapStateToProps = ({ movieList }) => ({
  movieList
});

export default connect(mapStateToProps, null)(SearchResult);
