import React, { useState } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import SearchByTitle from "components/searchByTitle";
import SearchResult from "./searchResult";
import Favorites from "./favorites";

const HomePage = ({ movieList }) => {
  const [key, setKey] = useState("home");
  const isMovieList = Object.keys(movieList).length;

  try {
    return (
      <Tabs activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <SearchByTitle />
          {isMovieList ? (
            movieList.data.Response !== "False" ? (
              <SearchResult />
            ) : (
              <div>{movieList.data.Error}</div>
            )
          ) : (
            <div></div>
          )}
        </Tab>
        <Tab eventKey="fav" title="Favorites">
          <Favorites />
        </Tab>
      </Tabs>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }
};

const mapStateToProps = ({ movieList }) => ({ movieList });

export default connect(mapStateToProps, null)(HomePage);
