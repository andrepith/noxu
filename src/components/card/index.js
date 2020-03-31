import React from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { find, uniqBy } from "lodash";

import { favoriteAction } from "store/actions";

const Card = ({ movieList, favorites, favoriteAction }) => {
  const handleClick = item => {
    favoriteAction(uniqBy([...favorites, item], "imdbID"));
  };

  const handleRemove = item => {
    favoriteAction(favorites.filter(fav => fav.imdbID !== item.imdbID));
  };

  const isFavorited = item => {
    return !find(favorites, { imdbID: item.imdbID });
  };

  return (
    <Row md={3}>
      {movieList.data.Search.map((item, key) => (
        <Col style={{ marginBottom: "1rem" }} md={3} key={key}>
          <div className="card" style={{ minHeight: "500px" }}>
            <div className="card-image">
              <img
                alt={item.Title}
                src={item.Poster}
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <div className="card-body text-center">
              <div>{item.Title}</div>
              {isFavorited(item) ? (
                <Button onClick={() => handleClick(item)} variant="success">
                  Add to favorite
                </Button>
              ) : (
                <Button onClick={() => handleRemove(item)} variant="danger">
                  Remove to favorite
                </Button>
              )}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = ({ movieList, favorites }) => ({
  movieList,
  favorites
});

export default connect(mapStateToProps, { favoriteAction })(Card);
