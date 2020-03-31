import React from "react";
import { connect } from "react-redux";

import Card from "components/card";

const Favorites = ({ favorites }) => {
  return <Card searchData={favorites} />;
};

const mapStateToProps = ({ favorites }) => ({
  favorites
});

export default connect(mapStateToProps, null)(Favorites);
